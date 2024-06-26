import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {forwardRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';
import {OnProgressData} from 'react-native-video';

import {Colors, FontFamily} from '../common/style';
import PlayIcon from '../icons/PlayIcon';
import PauseIcon from '../icons/PauseIcon';
import {formatTime} from '../utils/helpers';

interface IBottomPlalerNavbarProps {
  paused: boolean;
  setPaused: (arg0: boolean) => void;
  progress: null | OnProgressData;
  currentTime: null | number;
  duration: null | number | undefined;
}

interface IPlayerRef {
  seek: (time: number) => void;
}

const BottomPlalerNavbar = forwardRef<IPlayerRef, IBottomPlalerNavbarProps>(
  (props, ref) => {
    const {paused, setPaused, progress, currentTime, duration} = props;

    return (
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
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              marginTop: Platform.OS === 'ios' ? -10 : 0,
            }}>
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
                top: Platform.OS === 'ios' ? 35 : 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: Platform.OS === 'ios' ? 0 : 15,
              }}>
              <Text style={styles.textTime}>
                {progress === null || progress?.currentTime < 0.00001
                  ? formatTime(currentTime)
                  : formatTime(progress?.currentTime)}
              </Text>
              <Text style={styles.textTime}>
                {progress === null
                  ? formatTime(duration)
                  : formatTime(progress?.seekableDuration)}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  },
);

export default BottomPlalerNavbar;

const styles = StyleSheet.create({
  textTime: {
    fontFamily: FontFamily.nunitoSans_bold,
    fontSize: 11,
    lineHeight: 14,
    color: Colors.grey,
    letterSpacing: 1,
  },

  gradient: {
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
