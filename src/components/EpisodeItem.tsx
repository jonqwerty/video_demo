import {StyleSheet, View} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import Video, {OnProgressData} from 'react-native-video';

import {IEpisodeItem} from '../store/app/appReducer';
import TopPlayerNavbar from './TopPlayerNavbar';
import BottomPlalerNavbar from './BottomPlalerNavbar';

export type VideoRefType = React.RefObject<Video>;

interface IEpisodeItemProps {
  episode: IEpisodeItem;
}

const EpisodeItem: FC<IEpisodeItemProps> = ({episode}) => {
  const [paused, setPaused] = useState(true);
  const [progress, setProgress] = useState<null | OnProgressData>(null);
  const ref: VideoRefType = useRef<Video>(null);

  return (
    <View style={{flex: 1}}>
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
          // onBuffer={onBuffer} // Callback when remote video is buffering
          // onError={videoError} // Callback when video cannot be loaded
          muted
          style={styles.backgroundVideo}
          resizeMode="contain"
        />
        <BottomPlalerNavbar
          paused={paused}
          setPaused={setPaused}
          progress={progress}
          ref={ref}
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
