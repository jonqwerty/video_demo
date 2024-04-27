import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';
import MovieCardSmallListItem from './MovieCardSmallListItem';
import {IMovieItem} from '../store/app/appReducer';

interface IListOfSmallCards {
  data: IMovieItem[] | undefined;
  title: string;
}

const ListOfSmallCards: FC<IListOfSmallCards> = ({data, title}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item, index}) => <MovieCardSmallListItem item={item} />}
        contentContainerStyle={{gap: 15}}
        style={{flexGrow: 0}}
      />
    </View>
  );
};

export default ListOfSmallCards;

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
