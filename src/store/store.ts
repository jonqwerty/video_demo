import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {IData} from '../types/types';

interface BearState {
  data: IData | null;
  setData: (by: IData) => void;
}

export const useAppStore = create<BearState>()(
  devtools(
    persist(
      set => ({
        data: null,
        setData: data => set(state => ({data: data})),
      }),
      {
        name: 'bear-storage',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
