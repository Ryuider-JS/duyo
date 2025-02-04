export interface IChildren {
	children: React.ReactNode;
}

export interface IMainCommonSectionContainer extends IChildren {
	name: string;
}

export interface IMainColSectionWrapper extends Partial<IChildren> {
	title: string;
	isRed?: boolean;
	isCursor?: boolean;
}
