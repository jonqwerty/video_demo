import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {IMovieItem} from '../store/app/appReducer';
import {Colors, FontFamily} from '../common/style';
import MovieContinueWatchingListItem from './MovieContinueWatchingListItem';

interface IListOfContinueWatchingProps {
  data: IMovieItem[] | undefined;
  title: string;
}
const ListOfContinueWatching: FC<IListOfContinueWatchingProps> = ({
  data,
  title,
}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>

      {data?.map((item, index) => (
        <MovieContinueWatchingListItem item={item} key={index} />
      ))}
    </View>
  );
};

export default ListOfContinueWatching;

const styles = StyleSheet.create({
  text: {
    fontFamily: FontFamily.nunitoSans_bold,
    fontSize: 20,
    lineHeight: 24,
    color: Colors.white_200,
    marginTop: 40,
    marginBottom: 8,
  },
});
