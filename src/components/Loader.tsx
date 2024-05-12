import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, ScreenHeight, ScreenWidth} from '../common/style';

const Loader: FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.blue} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 5,
    top: ScreenHeight / 2 - 50,
    left: ScreenWidth / 2 - 20,
  },
});
