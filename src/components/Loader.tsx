import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {ScreenHeight, ScreenWidth} from '../common/style';

const Loader: FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 5,
    top: ScreenHeight / 2,
    left: ScreenWidth / 2,
  },
});
