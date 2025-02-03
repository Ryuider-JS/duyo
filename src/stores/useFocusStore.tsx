import { INavState } from '@/types/nav.interface';
import { create } from 'zustand';

export const useFocusStore = create<INavState>((set) => ({
	focus: 0,
	setFocus: (focus) => set({ focus }),
}));
