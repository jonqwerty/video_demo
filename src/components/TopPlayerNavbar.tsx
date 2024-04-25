import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {Colors, FontFamily} from '../common/style';
import DeleteIcon from '../icons/DeleteIcon';

interface ITopPlayerNavbarProps {
  title: string;
}

const TopPlayerNavbar: FC<ITopPlayerNavbarProps> = ({title}) => {
  return (
    <LinearGradient
      colors={[Colors.black_basic, 'transparent']}
      start={{x: 0, y: 0.35}}
      end={{x: 0, y: 1}}
      style={styles.gradientTop}>
      <View style={{position: 'absolute', left: 15}}>
        <DeleteIcon />
      </View>
      <Text style={styles.textEpisode}>{title}</Text>
    </LinearGradient>
  );
};

export default TopPlayerNavbar;

const styles = StyleSheet.create({
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
  textEpisode: {
    fontFamily: FontFamily.nunitoSans_bold,
    fontSize: 20,
    lineHeight: 24,
    color: Colors.white_200,
    letterSpacing: 0.5,
  },
});
