export interface IMainNavButton {
	idx: number;
	value: string;
}

export interface INavState {
	focus: number;
	double: boolean;
	setFocus: (focus: number) => void;
	setDouble: () => void;
}

export interface ISizeState {
	size: number;
	setSize: (value: number[]) => void;
	setSizeInc: (value: 2 | 1 | 0.1) => void;
	setSizeDec: (value: 2 | 1 | 0.1) => void;
}

interface Diagram {
	id: number;
	x: number;
	y: number;
	width?: number;
	height?: number;
	radius?: number;
	color: string;
	borderColor: string;
}

export interface IRectangleState {
	rectangles: Diagram[];
	addRectangle: () => void;
}
export interface ICircleState {
	circles: Diagram[];
	addCircle: () => void;
}
