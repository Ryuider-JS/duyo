import { INavState } from '@/types/nav.interface';
import { create } from 'zustand';

export const useFocusStore = create<INavState>((set) => ({
	focus: 0,
	double: false,
	setFocus: (focus) => set({ focus }),
	setDouble: () => set((state) => ({ double: !state.double })),
}));
