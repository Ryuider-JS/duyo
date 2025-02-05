import { IHiddenState } from '@/types/store.interface';
import { create } from 'zustand';

export const useHiddenStore = create<IHiddenState>((set) => ({
	isHidden: false,
	setIsHidden: () => set((state) => ({ isHidden: !state.isHidden })),
}));
