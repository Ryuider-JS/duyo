import { ICircleState } from '@/types/store.interface';
import { create } from 'zustand';

export const useCircleStore = create<ICircleState>((set) => ({
	circles: [],
	addCircle: () => {
		const newCircle = {
			id: Date.now(),
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			radius: Math.random() * 100 + 50,
			color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
			borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
		};
		set((state) => ({ circles: [...state.circles, newCircle] }));
	},
}));
