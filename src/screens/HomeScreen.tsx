import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import * as data from '../data/data.json';
import MovieCardBigListItem from '../components/MovieCardBigListItem';
import {Colors} from '../common/style';
import Header from '../components/Header';

const HomeScreen: FC = () => {
  console.log('first', data);
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.black_basic}
        barStyle={'default'}
      />
      <View style={styles.container}>
        <Header />

        <FlatList
          horizontal
          showsVerticalScrollIndicator={false}
          data={data.movies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => <MovieCardBigListItem item={item} />}
          contentContainerStyle={{gap: 12}}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.black_basic, paddingLeft: 15},
});
