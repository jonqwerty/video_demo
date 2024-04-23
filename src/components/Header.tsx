import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';
import gift from '../assets/images/gift.png';
import SearchIcon from '../icons/SearchIcon';

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.row}>
        <Image source={gift} />
        <View style={styles.marginLeft}>
          <SearchIcon />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 15,
    marginBottom: 20,
  },

  marginLeft: {marginLeft: 20},

  row: {flexDirection: 'row', alignItems: 'center'},

  text: {
    fontFamily: FontFamily.nunitoSans_bold,
    fontSize: 20,
    lineHeight: 24,
    color: Colors.white_200,
  },
});
