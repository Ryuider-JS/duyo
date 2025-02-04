import { INavState } from '@/types/store.interface';
import { create } from 'zustand';

export const useFocusStore = create<INavState>((set) => ({
	focus: 1,
	double: false,
	setFocus: (focus) => set({ focus }),
	setDouble: () => set((state) => ({ double: !state.double })),
}));
