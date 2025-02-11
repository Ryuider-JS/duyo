import { ISizeState } from '@/types/store.interface';
import { create } from 'zustand';

export const useSizeStore = create<ISizeState>((set) => ({
	size: 48,
	setSize: (state) => set({ size: Math.max(state[0], 10) }),
	setSizeInc: (value) => set((state) => ({ size: Math.min(state.size + value, 100) })),
	setSizeDec: (value) => set((state) => ({ size: Math.max(state.size - value, 10) })),
	setDbClickInc: () => set({ size: 62 }),
	setDbClickDec: () => set({ size: 48 }),
}));
