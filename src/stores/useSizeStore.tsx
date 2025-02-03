import { ISizeState } from '../types/size.interface';
import { create } from 'zustand';

export const useSizeStore = create<ISizeState>((set) => ({
	size: 48,
	setSize: (state) => set({ size: state[0] }),
	setSizeInc: (value) => set((state) => ({ size: state.size + value })),
	setSizeDec: (value) => set((state) => ({ size: state.size - value })),
}));
