import {BackHandler, StyleSheet, View} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import Video, {OnProgressData} from 'react-native-video';

import TopPlayerNavbar from './TopPlayerNavbar';
import BottomPlalerNavbar from './BottomPlalerNavbar';
import Loader from './Loader';
import {IEpisodeItem, IEpisodeTimeItem} from '../types/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../common/enums';

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
        setEpisodesCurrentTime([
          ...episodesCurrentTime,
          {episodeId: episode.id, progress: progress?.currentTime},
        ]);
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

  return (
    <View style={{flex: 1}}>
      {loadong ? <Loader /> : null}
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
          muted={true}
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
