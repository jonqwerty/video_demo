import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import * as data from '../data/data.json';

import {Colors} from '../common/style';
import Header from '../components/Header';
import ListOfSmallCards from '../components/ListOfSmallCards';
import ListOfBigCards from '../components/ListOfBigCards';

const HomeScreen: FC = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.black_basic}
        barStyle={'default'}
      />
      <View style={styles.container}>
        <Header />
        <ScrollView>
          {data.movies.filter(item => !item.coming) ? (
            <ListOfBigCards data={data.movies.filter(item => !item.coming)} />
          ) : null}

          {data.movies.filter(item => item.trendingNow) ? (
            <ListOfSmallCards
              data={data.movies.filter(item => item.trendingNow)}
              title={'Trending Now'}
            />
          ) : null}

          {data.movies.filter(item => item.top) ? (
            <ListOfSmallCards
              data={data.movies.filter(item => item.top)}
              title={'Top Romance'}
            />
          ) : null}
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.black_basic, paddingLeft: 15},
});
