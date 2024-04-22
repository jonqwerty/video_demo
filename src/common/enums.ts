import {RouteProp} from '@react-navigation/native';

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
  Movie: {};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
