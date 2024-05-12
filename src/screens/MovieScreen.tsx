import {
  Animated,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import SwipeGesture from 'react-native-swipe-gestures';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {RootRouteProps, RootStackParamList, Screen} from '../common/enums';
import {Colors, ScreenHeight, WindowHeight} from '../common/style';
import EpisodeItem from '../components/EpisodeItem';
import {useAppStore} from '../store/store';
import {IEpisodeTimeItem} from '../types/types';

interface GestureState {
  _accountsForMovesUpTo: number;
  dx: number;
  dy: number;
  moveX: number;
  moveY: number;
  numberActiveTouches: number;
  stateID: number;
  vx: number;
  vy: number;
  x0: number;
  y0: number;
}

const MovieScreen: FC = () => {
  const route = useRoute<RootRouteProps<'Movie'>>();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const insets = useSafeAreaInsets();

  const statusBarHeight = StatusBar.currentHeight || 0;

  const episodesTime = route.params.episodesTime;

  const setContinueWatching = useAppStore(state => state.setContinueWatching);
  const setContinueWatchingWithTime = useAppStore(
    state => state.setContinueWatchingWithTime,
  );
  const [currentEpisode, setCurrentEpisode] = useState(0);

  const [episodesCurrentTime, setEpisodesCurrentTime] = useState<
    IEpisodeTimeItem[] | []
  >([]);

  const scrollViewRef = useRef(null);

  useEffect(() => {
    return () => {
      setContinueWatching(route?.params?.item);

      setContinueWatchingWithTime({
        movieId: route?.params?.item.id,
        episodes: episodesCurrentTime,
      });
    };
  }, [episodesCurrentTime]);

  const handleSwipe = (
    event: NativeSyntheticEvent<{contentOffset: {x: number; y: number}}>,
  ) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const newIndex = Math.round(offsetY / ScreenHeight);
    if (newIndex !== currentEpisode) {
      setCurrentEpisode(newIndex);
    }
  };

  const screenTranslateX = new Animated.Value(0);

  const onSwipeRight = (gestureState: GestureState) => {
    if (gestureState.dx > 100) {
      Animated.timing(screenTranslateX, {
        toValue: 200,
        duration: 300,
        useNativeDriver: true,
      }).start(() => navigation.navigate(Screen.Home, {}));
    }
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.black_basic}
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
      />
      <ScrollView
        ref={scrollViewRef}
        horizontal={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleSwipe}>
        <SwipeGesture
          onSwipeRight={onSwipeRight}
          config={{
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80,
          }}
          style={{flex: 1}}>
          <Animated.View
            style={{
              transform: [{translateX: screenTranslateX}],
            }}>
            {route?.params?.item?.episodes?.map((episode, index) => (
              <View
                key={episode.id}
                style={{
                  height:
                    Platform.OS === 'ios'
                      ? ScreenHeight - (insets.top + insets.bottom)
                      : WindowHeight - statusBarHeight,
                }}>
                <EpisodeItem
                  episode={episode}
                  currentEpisode={currentEpisode}
                  episodesCurrentTime={episodesCurrentTime}
                  setEpisodesCurrentTime={setEpisodesCurrentTime}
                  episodeTime={episodesTime?.find(
                    obj => obj.episodeId === episode.id,
                  )}
                />
              </View>
            ))}
          </Animated.View>
        </SwipeGesture>
      </ScrollView>
    </>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
