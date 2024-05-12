import {Animated, BackHandler, StyleSheet, View} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import Video, {OnProgressData} from 'react-native-video';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SwipeGesture from 'react-native-swipe-gestures';

import TopPlayerNavbar from './TopPlayerNavbar';
import BottomPlalerNavbar from './BottomPlalerNavbar';
import Loader from './Loader';
import {IEpisodeItem, IEpisodeTimeItem} from '../types/types';
import {RootStackParamList} from '../common/enums';
import {Colors} from '../common/style';

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

export type VideoRefType = React.RefObject<Video>;

interface IEpisodeItemProps {
  episode: IEpisodeItem;
  currentEpisode: number;
  episodesCurrentTime: IEpisodeTimeItem[] | [];
  setEpisodesCurrentTime: React.Dispatch<
    React.SetStateAction<IEpisodeTimeItem[] | []>
  >;
  episodeTime: IEpisodeTimeItem | undefined;
}

const EpisodeItem: FC<IEpisodeItemProps> = ({
  episode,
  currentEpisode,
  episodesCurrentTime,
  setEpisodesCurrentTime,
  episodeTime,
}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [paused, setPaused] = useState(true);
  const [progress, setProgress] = useState<null | OnProgressData>(null);
  const [currentTime, setCurrentTime] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | undefined | null>(null);
  const [loadong, setLoading] = useState<boolean>(false);
  const ref: VideoRefType = useRef<Video>(null);

  const seekToTime = (timeInSeconds: number) => {
    if (ref.current) {
      ref.current.seek(timeInSeconds);
    }
  };

  useEffect(() => {
    if (episodeTime) {
      seekToTime(episodeTime.progress);
    }
  }, []);

  useEffect(() => {
    if (progress && paused) {
      const existingObject = episodesCurrentTime.find(
        obj => obj.episodeId === episode.id,
      );

      if (existingObject) {
        const update = episodesCurrentTime.filter(
          item => item.episodeId !== episode.id,
        );

        setEpisodesCurrentTime([
          ...update,
          {episodeId: episode.id, progress: progress?.currentTime},
        ]);
      } else {
        if (progress?.currentTime > 0.00001) {
          setEpisodesCurrentTime([
            ...episodesCurrentTime,
            {episodeId: episode.id, progress: progress?.currentTime},
          ]);
        }
      }
      // return () => {
      //   if (progress.currentTime > 0) {
      //     const existingObject = episodesCurrentTime.find(
      //       obj => obj.episodeId === episode.id,
      //     );

      //     if (existingObject) {
      //       const update = episodesCurrentTime.filter(
      //         item => item.episodeId !== episode.id,
      //       );

      //       setEpisodesCurrentTime([
      //         ...update,
      //         {episodeId: episode.id, progress: progress?.currentTime},
      //       ]);
      //     } else {
      //       setEpisodesCurrentTime([
      //         ...episodesCurrentTime,
      //         {episodeId: episode.id, progress: progress?.currentTime},
      //       ]);
      //     }
      //   }
      // };
    }
  }, [paused, progress]);

  useEffect(() => {
    if (currentEpisode + 1 !== episode.id) {
      setPaused(true);
    }
  }, [currentEpisode]);

  const backAction = () => {
    if (progress) {
      const existingObject = episodesCurrentTime.find(
        obj => obj.episodeId === episode.id,
      );

      if (existingObject) {
        const update = episodesCurrentTime.filter(
          item => item.episodeId !== episode.id,
        );

        setEpisodesCurrentTime([
          ...update,
          {episodeId: episode.id, progress: progress?.currentTime},
        ]);
      } else {
        setEpisodesCurrentTime([
          ...episodesCurrentTime,
          {episodeId: episode.id, progress: progress?.currentTime},
        ]);
      }
      navigation.goBack();
    } else {
      navigation.goBack();
    }
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [progress]);

  const screenTranslateX = new Animated.Value(0);

  const saveOnSwipe = () => {
    setPaused(true);
    setTimeout(() => {
      navigation.goBack();
    }, 100);
  };

  const onSwipeRight = (gestureState: GestureState) => {
    if (gestureState.dx > 100) {
      Animated.timing(screenTranslateX, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }).start(saveOnSwipe);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.black_basic}}>
      {loadong ? <Loader /> : null}
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
          <View style={styles.backgroundVideo}>
            <TopPlayerNavbar title={episode.title} />
            <Video
              paused={paused}
              source={{
                uri: episode.videoURI,
              }}
              ref={ref}
              onProgress={x => {
                setProgress(x);
              }}
              onLoadStart={() => setLoading(true)}
              onLoad={data => {
                setDuration(data?.duration);
                setCurrentTime(
                  episodeTime ? episodeTime.progress : data?.currentTime,
                );
                if (episodeTime?.progress) {
                  setProgress({
                    currentTime: episodeTime?.progress || 0,
                    seekableDuration: data.duration,
                    playableDuration: data.duration,
                  });
                }
                setLoading(false);
              }}
              muted={false}
              style={styles.backgroundVideo}
              resizeMode="cover"
              // onEnd={() => setPaused(true)}
            />
            <BottomPlalerNavbar
              paused={paused}
              setPaused={setPaused}
              progress={progress}
              ref={ref}
              currentTime={currentTime}
              duration={duration}
            />
          </View>
        </Animated.View>
      </SwipeGesture>
    </View>
  );
};
export default EpisodeItem;

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
});
