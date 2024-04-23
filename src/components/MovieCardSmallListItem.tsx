import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily, screen_width} from '../common/style';
import {IMovieItem} from '../store/app/appReducer';
import LockIcon from '../icons/LockIcon';

interface IMovieCardSmallListItemProps {
  item: IMovieItem;
}

const MovieCardSmallListItem: FC<IMovieCardSmallListItemProps> = ({item}) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default MovieCardSmallListItem;

const styles = StyleSheet.create({
  container: {width: screen_width / 3},

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
    left: screen_width / 3 / 2 - 25,
    top: 200 / 2 - 25,
  },
});
