import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Video, {OnProgressData} from 'react-native-video';
import {useRoute} from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';

import {RootRouteProps} from '../common/enums';
import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';
import {Colors, FontFamily} from '../common/style';
import DeleteIcon from '../icons/DeleteIcon';
import {formatTime} from '../utils/helpers';

type VideoRefType = React.RefObject<Video>;

const MovieScreen = () => {
  const route = useRoute<RootRouteProps<'Movie'>>();
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState<null | OnProgressData>(null);
  const ref: VideoRefType = useRef<Video>(null);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.black_basic}
        barStyle={'default'}
      />
      <View style={{flex: 1, backgroundColor: Colors.black_basic}}>
        <View style={styles.backgroundVideo}>
          <LinearGradient
            colors={[Colors.black_basic, 'transparent']}
            start={{x: 0, y: 0.35}}
            end={{x: 0, y: 1}}
            style={styles.gradientTop}>
            <View style={{position: 'absolute', left: 15}}>
              <DeleteIcon />
            </View>
            <Text style={styles.textEpisode}>Episode 1</Text>
          </LinearGradient>
          <Video
            paused={paused}
            source={{
              uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/convertedwife.m3u8',
            }}
            ref={ref}
            onProgress={x => {
              setProgress(x);
            }}
            // onBuffer={this.onBuffer} // Callback when remote video is buffering
            // onError={this.videoError} // Callback when video cannot be loaded
            muted
            style={styles.backgroundVideo}
            resizeMode="contain"
          />
          <LinearGradient
            colors={['transparent', Colors.black_basic]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.65}}
            style={styles.gradient}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 15,
                alignItems: 'center',
              }}>
              <Pressable
                style={{alignSelf: 'flex-start'}}
                onPress={() => {
                  setPaused(!paused);
                }}>
                {paused ? <PlayIcon /> : <PauseIcon />}
              </Pressable>
              <View style={{flex: 1, marginLeft: 20}}>
                <Slider
                  minimumValue={0}
                  maximumValue={progress?.seekableDuration}
                  value={progress?.currentTime}
                  minimumTrackTintColor={Colors.white}
                  maximumTrackTintColor={Colors.grey}
                  thumbTintColor={Colors.white}
                  onValueChange={x => {
                    ref?.current?.seek(x);
                  }}
                />
                <View
                  style={{
                    width: '100%',
                    position: 'absolute',
                    top: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 15,
                  }}>
                  <Text style={styles.textTime}>
                    {formatTime(progress?.currentTime)}
                  </Text>
                  <Text style={styles.textTime}>
                    {formatTime(progress?.seekableDuration)}
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },

  textTime: {
    fontFamily: FontFamily.nunitoSans_bold,
    fontSize: 11,
    lineHeight: 14,
    color: Colors.grey,
    letterSpacing: 1,
  },
  textEpisode: {
    fontFamily: FontFamily.nunitoSans_bold,
    fontSize: 20,
    lineHeight: 24,
    color: Colors.white_200,
    letterSpacing: 0.5,
  },

  gradient: {
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientTop: {
    width: '100%',
    height: 80,
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    zIndex: 2,
  },
});
