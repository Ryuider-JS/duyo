import { IMainCommonSectionContainer } from '@/types/main.interface';

export default function MainCommonSectionContainer({
	children,
	name,
}: IMainCommonSectionContainer) {
	return (
		<div className="border-r-[1px] border-neutral-300 h-full flex flex-col pl-1 pr-2 gap-y-1 items-center">
			{children}
			<p className="text-xs text-neutral-600">{name}</p>
		</div>
	);
}
