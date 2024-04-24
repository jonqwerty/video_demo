import {createReducer, isAnyOf, SerializedError} from '@reduxjs/toolkit';

import {LoadingStatus} from '../../common/enums';

export interface IMovieItem {
  id: number;
  trendingNow: boolean;
  top: boolean;
  coming: string | null;
  title: string;
  year: string;
  runtime: string;
  genres: string;
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
  episodes: string[];
}

export interface IApp {
  movies: null;
  validationError: SerializedError | null;
  loading: string;
}

const initialState: IApp = {
  movies: null,
  validationError: null,
  loading: LoadingStatus.IDLE,
};

const appReducer = createReducer(initialState, builder => {});

export default appReducer;
