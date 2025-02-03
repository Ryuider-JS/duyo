import { ISizeState } from '../types/size.interface';
import { create } from 'zustand';

export const useSizeStore = create<ISizeState>((set) => ({
	size: 48,
	setSize: (size) => set({ size }),
	setSizeInc: () => set((state) => ({ size: state.size + 2 })),
	setSizeDec: () => set((state) => ({ size: state.size - 2 })),
}));
