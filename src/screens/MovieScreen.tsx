import {
  NativeSyntheticEvent,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {useRoute} from '@react-navigation/native';

import {RootRouteProps} from '../common/enums';
import {Colors, ScreenWidth} from '../common/style';
import EpisodeItem from '../components/EpisodeItem';
import {useAppStore} from '../store/store';
import {IEpisodeTimeItem} from '../types/types';

const MovieScreen: FC = () => {
  const route = useRoute<RootRouteProps<'Movie'>>();

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
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / ScreenWidth);
    if (newIndex !== currentEpisode) {
      setCurrentEpisode(newIndex);
    }
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.black_basic}
        barStyle={'default'}
      />
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleSwipe}>
        {route?.params?.item?.episodes?.map((episode, index) => (
          <View key={episode.id} style={{width: ScreenWidth}}>
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
      </ScrollView>
    </>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
