import {StyleSheet, View} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import Video, {OnProgressData} from 'react-native-video';

import TopPlayerNavbar from './TopPlayerNavbar';
import BottomPlalerNavbar from './BottomPlalerNavbar';
import Loader from './Loader';
import {IEpisodeItem} from '../types/types';

export type VideoRefType = React.RefObject<Video>;

interface IEpisodeItemProps {
  episode: IEpisodeItem;
  currentEpisode: number;
}

const EpisodeItem: FC<IEpisodeItemProps> = ({episode, currentEpisode}) => {
  const [paused, setPaused] = useState(true);
  const [progress, setProgress] = useState<null | OnProgressData>(null);
  const [currentTime, setCurrentTime] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [loadong, setLoading] = useState<boolean>(false);
  const ref: VideoRefType = useRef<Video>(null);

  useEffect(() => {
    if (currentEpisode + 1 !== episode.id) {
      setPaused(true);
    }
  }, [currentEpisode]);

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
            setCurrentTime(data?.currentTime);
            setLoading(false);
          }}
          // onBuffer={onBuffer} // Callback when remote video is buffering
          // onError={videoError} // Callback when video cannot be loaded
          muted={false}
          style={styles.backgroundVideo}
          resizeMode="cover"
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
