import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import * as data from '../data/data.json';

import {Colors} from '../common/style';
import Header from '../components/Header';
import ListOfSmallCards from '../components/ListOfSmallCards';
import ListOfBigCards from '../components/ListOfBigCards';

const HomeScreen: FC = () => {
  const order = data.sectionOrder;
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
          {order.map((item, index) => {
            switch (item) {
              case 'genre':
                return (
                  <View key={index}>
                    <ListOfBigCards
                      data={data.movies.filter(item => !item.coming)}
                    />
                  </View>
                );
              case 'trendingNow':
                return (
                  <View key={index}>
                    <ListOfSmallCards
                      data={data.movies.filter(item => item.trendingNow)}
                      title={'Trending Now'}
                    />
                  </View>
                );
              case 'top':
                return (
                  <View key={index}>
                    <ListOfSmallCards
                      data={data.movies.filter(item => item.top)}
                      title={'Top Romance'}
                    />
                  </View>
                );
              default:
                return null;
            }
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.black_basic, paddingLeft: 15},
});
