import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily, screen_width} from '../common/style';
import {IMovieItem} from '../store/app/appReducer';

interface IMovieCardBigListItemProps {
  item: IMovieItem;
}

const MovieCardBigListItem: FC<IMovieCardBigListItemProps> = ({item}) => {
  return (
    <ImageBackground
      style={styles.bg}
      source={{uri: item.posterUrl}}
      resizeMode="cover">
      <View style={styles.genreBox}>
        <Text style={styles.genre}>{item.genres}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.director}>{item.director}</Text>
      </View>
    </ImageBackground>
  );
};

export default MovieCardBigListItem;

const styles = StyleSheet.create({
  bg: {
    width: screen_width - 15 - 12 - 30,
    height: 200,
    borderRadius: 10,
    padding: 16,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },

  genreBox: {
    backgroundColor: Colors.black_basic,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },

  wrapper: {
    backgroundColor: Colors.black_basic,
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },

  genre: {
    fontFamily: FontFamily.nunitoSans_bold,
    fontSize: 11,
    lineHeight: 21,
    color: Colors.white_200,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  title: {
    fontFamily: FontFamily.nunitoSans_bold,
    fontSize: 24,
    lineHeight: 28,
    color: Colors.white_200,
  },

  director: {
    fontFamily: FontFamily.nunitoSans_regular,
    fontSize: 13,
    lineHeight: 16,
    color: Colors.white_200,
    marginTop: 8,
  },
});
