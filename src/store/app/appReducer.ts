import {createReducer, isAnyOf, SerializedError} from '@reduxjs/toolkit';

import {LoadingStatus} from '../../common/enums';

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
