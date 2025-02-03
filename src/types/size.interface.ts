export interface ISizeState {
	size: number;
	setSize: (value: number[]) => void;
	setSizeInc: (value: 2 | 0.1) => void;
	setSizeDec: (value: 2 | 0.1) => void;
}
