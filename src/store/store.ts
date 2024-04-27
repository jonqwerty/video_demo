import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {IData, IMovieItem} from '../types/types';
import {produce} from 'immer';

interface IState {
  data: IData | null;
  continueWatching: number[] | null;
  setData: (by: IData) => void;
  setContinueWatching: (item: IMovieItem) => void;
}

export const useAppStore = create<IState>()(
  devtools(
    persist(
      set => ({
        data: null,
        continueWatching: null,
        setData: data => set(state => ({data: data})),
        setContinueWatching: (item: IMovieItem) =>
          set(
            produce(state => {
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
      }),
      {
        name: 'bear-storage',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
