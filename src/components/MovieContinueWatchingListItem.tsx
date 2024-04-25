import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {Colors, FontFamily, ScreenWidth} from '../common/style';
import {IMovieItem} from '../store/app/appReducer';
import {RootStackParamList, Screen} from '../common/enums';
import ArrowRightIcon from '../icons/ArrowRightIcon';

interface IMovieContinueWatchingListItemProps {
  item: IMovieItem;
}

const MovieContinueWatchingListItem: FC<
  IMovieContinueWatchingListItemProps
> = ({item}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {};

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image
        style={styles.bg}
        source={{uri: item.posterUrl}}
        resizeMode="cover"
      />

      <View style={styles.wrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.director}>{item.director}</Text>
      </View>
      <View style={{marginLeft: 'auto', marginRight: 20}}>
        <ArrowRightIcon />
      </View>
    </Pressable>
  );
};

export default MovieContinueWatchingListItem;

const styles = StyleSheet.create({
  container: {
    width: ScreenWidth - 15 - 15,
    backgroundColor: Colors.blue,
    borderRadius: 10,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  bg: {
    width: 45,
    height: 55,
    borderRadius: 10,

    overflow: 'hidden',
  },

  wrapper: {
    paddingLeft: 12,
  },

  title: {
    fontFamily: FontFamily.nunitoSans_bold,
    fontSize: 16,
    lineHeight: 20,
    color: Colors.white_200,
  },

  director: {
    fontFamily: FontFamily.nunitoSans_regular,
    fontSize: 14,
    lineHeight: 18,
    color: Colors.white_200,
  },
});
