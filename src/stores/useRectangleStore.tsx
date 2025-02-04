import { IRectangleState } from '@/types/store.interface';
import { create } from 'zustand';

export const useRectangleStore = create<IRectangleState>((set) => ({
	rectangles: [],
	addRectangle: () => {
		const newRectangle = {
			id: Date.now(),
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			width: Math.random() * 100 + 50,
			height: Math.random() * 100 + 50,
			color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
			borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
		};
		set((state) => ({ rectangles: [...state.rectangles, newRectangle] }));
	},
}));
