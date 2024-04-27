import {createReducer, isAnyOf, SerializedError} from '@reduxjs/toolkit';

import {LoadingStatus} from '../../common/enums';

export interface IData {
  sectionOrder: string[];
  movies: IMovieItem[];
}

export interface IEpisodeItem {
  id: number;
  title: string;
  videoURI: string;
}

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
  episodes: IEpisodeItem[];
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
