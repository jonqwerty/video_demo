import {FlatList, StyleSheet} from 'react-native';
import React, {FC} from 'react';

import MovieCardBigListItem from './MovieCardBigListItem';
import {IMovieItem} from '../types/types';

interface IListOfBigCardsProps {
  data: IMovieItem[] | undefined;
}
const ListOfBigCards: FC<IListOfBigCardsProps> = ({data}) => {
  return (
    <FlatList
      horizontal
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({item, index}) => <MovieCardBigListItem item={item} />}
      contentContainerStyle={{gap: 15}}
      style={{flexGrow: 0}}
    />
  );
};

export default ListOfBigCards;

const styles = StyleSheet.create({});
