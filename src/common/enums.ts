import {RouteProp} from '@react-navigation/native';
import {IMovieItem} from '../types/types';

export enum Screen {
  Home = 'Home',
  Movie = 'Movie',
}

export type RootStackParamList = {
  Home: {};
  Movie: {item: IMovieItem};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
