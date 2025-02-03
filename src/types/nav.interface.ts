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
