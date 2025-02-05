export interface IMainNavButton {
	idx: number;
	value: string;
}

export interface INavState {
	focus: number;
	setFocus: (focus: number) => void;
}

export interface ISizeState {
	size: number;
	setSize: (value: number[]) => void;
	setSizeInc: (value: 2 | 1 | 0.1) => void;
	setSizeDec: (value: 2 | 1 | 0.1) => void;
	setDbClickInc: () => void;
	setDbClickDec: () => void;
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

export interface IHiddenState {
	isHidden: boolean;
	setIsHidden: () => void;
}
