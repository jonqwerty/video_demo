import React, {FC, useEffect} from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';

import AppNavigator from './src/navigation/AppNavigator';
import {useAppStore} from './src/store/store';
import {IData} from './src/types/types';
import { Colors } from './src/common/style';

const App: FC = () => {
  const setData = useAppStore(state => state.setData);

  useEffect(() => {
    // remoteConfig().fetch(300);
    remoteConfig()
      .setDefaults({
        data_movie: 'disabled',
      })
      .then(() => remoteConfig().fetchAndActivate())
      .then(() => {
        const res = remoteConfig().getValue('data_movie');
        setData(JSON.parse(res?._value) as IData);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.black,
  },
});

export default App;
