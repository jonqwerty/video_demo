import {Dimensions} from 'react-native';

export const Colors = {
  lime: '#BDFF31',
  yellow: '#F8A121',
  pink: '#fc97e6',
  blue: '#dee2fc',
  violet: '#A126E6',
  white: '#fff',
  white_200: '#F5F5F5',
  black: '#000',
  black_70: '#00000070',
  red: '#F00',
  grey: '#C4C8CC',
  grey_200: '#858590',
  black_basic: '#0F0F0F',
};

export const FontFamily = {
  nunitoSans_black: 'NunitoSans-Black',
  nunitoSans_bold: 'NunitoSans-Bold',
  nunitoSans_semibold: 'NunitoSans-SemiBold',
  nunitoSans_medium: 'NunitoSans-Medium',
  nunitoSans_regular: 'NunitoSans-Regular',
  nunitoSans_light: 'NunitoSans-Light',
};

export const screen = Dimensions.get('screen');
export const window = Dimensions.get('window');

export const screen_width = screen.width;
export const screen_height = screen.height;

export const window_width = window.width;
export const window_height = window.height;
