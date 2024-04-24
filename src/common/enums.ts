import {RouteProp} from '@react-navigation/native';
import {IMovieItem} from '../store/app/appReducer';

export enum LoadingStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

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
