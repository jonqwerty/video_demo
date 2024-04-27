import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Colors, FontFamily, ScreenWidth} from '../common/style';
import LockIcon from '../icons/LockIcon';
import {RootStackParamList, Screen} from '../common/enums';
import {IMovieItem} from '../types/types';

interface IMovieCardSmallListItemProps {
  item: IMovieItem;
}

const MovieCardSmallListItem: FC<IMovieCardSmallListItemProps> = ({item}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = async () => {
    if (item.coming === null) {
      navigation.navigate(Screen.Movie, {item: item});
    }
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image
        style={styles.bg}
        source={{uri: item.posterUrl}}
        resizeMode="cover"
        blurRadius={item.coming ? 20 : 0}
      />

      {item.coming !== null ? (
        <View style={styles.lock}>
          <LockIcon />
        </View>
      ) : null}
      {item.coming !== null ? (
        <Text style={styles.comingSoon}>coming {item.coming}</Text>
      ) : null}
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
};

export default MovieCardSmallListItem;

const styles = StyleSheet.create({
  container: {width: ScreenWidth / 3},

  bg: {
    height: 200,
    borderRadius: 10,
    padding: 16,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },

  comingSoon: {
    marginTop: 6,
    fontFamily: FontFamily.nunitoSans_semibold,
    fontSize: 11,
    lineHeight: 14,
    color: Colors.blue,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  title: {
    marginTop: 6,
    fontFamily: FontFamily.nunitoSans_semibold,
    fontSize: 14,
    lineHeight: 17,
    color: Colors.white_200,
  },

  lock: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.grey_60,
    position: 'absolute',
    left: ScreenWidth / 3 / 2 - 25,
    top: 200 / 2 - 25,
  },
});
