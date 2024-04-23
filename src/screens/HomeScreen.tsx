import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';

import * as data from '../data/data.json';
import MovieCardBigListItem from '../components/MovieCardBigListItem';
import {Colors, FontFamily} from '../common/style';
import Header from '../components/Header';
import MovieCardSmallListItem from '../components/MovieCardSmallListItem';

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
        <ScrollView>
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            data={data.movies.filter(item => !item.coming)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => <MovieCardBigListItem item={item} />}
            contentContainerStyle={{gap: 15}}
            style={{flexGrow: 0}}
          />

          <Text style={styles.text}>Trending Now</Text>
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            data={data.movies.filter(item => item.trendingNow)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <MovieCardSmallListItem item={item} />
            )}
            contentContainerStyle={{gap: 15}}
            style={{flexGrow: 0}}
          />

          <Text style={styles.text}>Top Romance</Text>
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            data={data.movies.filter(item => item.top)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <MovieCardSmallListItem item={item} />
            )}
            contentContainerStyle={{gap: 15}}
            style={{flexGrow: 0}}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.black_basic, paddingLeft: 15},
  text: {
    fontFamily: FontFamily.nunitoSans_bold,
    fontSize: 20,
    lineHeight: 24,
    color: Colors.white_200,
    marginTop: 40,
    marginBottom: 8,
  },
});
