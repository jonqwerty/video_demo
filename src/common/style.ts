import {Dimensions} from 'react-native';

export const Colors = {
  lime: '#BDFF31',
  yellow: '#F8A121',
  pink: '#fc97e6',
  blue: '#00BFE5',
  violet: '#A126E6',
  white: '#fff',
  white_200: '#F5F5F5',
  black: '#000',
  black_70: '#00000070',
  red: '#F00',
  grey: '#C4C8CC',
  grey_60: '#C4C8CC60',
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

export const ScreenWidth = screen.width;
export const ScreenHeight = screen.height;

export const WindowWidth = window.width;
export const WindowHeight = window.height;
