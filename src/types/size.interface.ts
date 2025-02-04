export interface ISizeState {
	size: number;
	setSize: (value: number[]) => void;
	setSizeInc: (value: 2 | 1 | 0.1) => void;
	setSizeDec: (value: 2 | 1 | 0.1) => void;
}
