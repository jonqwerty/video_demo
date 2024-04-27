import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
