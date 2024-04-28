import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {IContinueWatchingWithTime, IData, IMovieItem} from '../types/types';
import {produce} from 'immer';

interface IState {
  data: IData | null;
  continueWatching: number[] | null;
  continueWatchingWithTime: IContinueWatchingWithTime[] | [];
  setData: (by: IData) => void;
  setContinueWatching: (item: IMovieItem) => void;
  setContinueWatchingWithTime: (item: IContinueWatchingWithTime) => void;
}

export const useAppStore = create<IState>()(
  devtools(
    persist(
      set => ({
        data: null,
        continueWatching: null,
        continueWatchingWithTime: [],
        setData: data => set(state => ({data: data})),
        setContinueWatching: (item: IMovieItem) =>
          set(
            produce((state: IState) => {
              const ids = state.continueWatching;
              if (ids?.length) {
                const newArr = [...ids, item.id];
                const unique = [...new Set(newArr)];
                state.continueWatching = unique;
              } else {
                state.continueWatching = [item.id];
              }
            }),
          ),
        setContinueWatchingWithTime: (item: IContinueWatchingWithTime) =>
          set(
            produce((state: IState) => {
              const existingObject = state.continueWatchingWithTime.find(
                item => item.movieId === item.movieId,
              );
              if (existingObject) {
                const update = state.continueWatchingWithTime.filter(
                  item => item.movieId !== item.movieId,
                );
                state.continueWatchingWithTime = [...update, item];
              } else {
                state.continueWatchingWithTime = [
                  ...state.continueWatchingWithTime,
                  item,
                ];
              }
            }),
          ),
      }),
      {
        name: 'bear-storage',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
