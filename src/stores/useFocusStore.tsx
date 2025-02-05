import { INavState } from '@/types/store.interface';
import { create } from 'zustand';

export const useFocusStore = create<INavState>((set) => ({
	focus: 1,
	setFocus: (focus) => set({ focus }),
}));
