import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {Colors, FontFamily, ScreenWidth} from '../common/style';
import {RootStackParamList, Screen} from '../common/enums';
import { IMovieItem } from '../types/types';

interface IMovieCardBigListItemProps {
  item: IMovieItem;
}

const MovieCardBigListItem: FC<IMovieCardBigListItemProps> = ({item}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = async () => {
    navigation.navigate(Screen.Movie, {item: item});
    const ids = await AsyncStorage.getItem('key');
    if (ids) {
      const arr = JSON.parse(ids);
      const newArr = [...arr, item.id];
      const unique = [...new Set(newArr)];
      await AsyncStorage.setItem('key', JSON.stringify(unique));
    } else {
      await AsyncStorage.setItem('key', JSON.stringify([item.id]));
    }
  };

  return (
    <Pressable onPress={handlePress}>
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
    </Pressable>
  );
};

export default MovieCardBigListItem;

const styles = StyleSheet.create({
  bg: {
    width: ScreenWidth - 15 - 12 - 30,
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
