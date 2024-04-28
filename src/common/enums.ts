import {RouteProp} from '@react-navigation/native';
import {IEpisodeTimeItem, IMovieItem} from '../types/types';

export enum Screen {
  Home = 'Home',
  Movie = 'Movie',
}

export type RootStackParamList = {
  Home: {};
  Movie: {item: IMovieItem; episodesTime?: IEpisodeTimeItem[]};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
