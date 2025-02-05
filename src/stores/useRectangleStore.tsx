import { IRectangleState } from '@/types/store.interface';
import { create } from 'zustand';

export const useRectangleStore = create<IRectangleState>((set) => ({
	rectangles: [],
	addRectangle: () => {
		const width = Math.random() * 100 + 50;
		const height = Math.random() * 100 + 50;
		const x = Math.random() * (window.innerWidth - width);
		const y = Math.random() * (window.innerHeight - height);
		const color = `#${Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, '0')}`;
		const borderColor = `#${Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, '0')}`;

		const newRectangle = { id: Date.now(), x, y, width, height, color, borderColor };
		set((state) => ({ rectangles: [...state.rectangles, newRectangle] }));
	},
}));
