export interface IMainNavButton {
	idx: number;
	value: string;
}

export interface INavState {
	focus: number;
	setFocus: (focus: number) => void;
}
