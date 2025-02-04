import { IMainCommonSectionContainer } from '@/types/main.interface';

export default function MainRowSectionWrapper({ children, name }: IMainCommonSectionContainer) {
	return (
		<div className="flex gap-x-0.5 cursor-not-allowed items-center rounded p-1 hover:bg-neutral-100 active:bg-neutral-200">
			{children}
			<p className="text-xs font-normal text-neutral-600">{name}</p>
		</div>
	);
}
