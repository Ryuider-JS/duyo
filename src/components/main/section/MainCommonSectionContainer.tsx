import { IMainCommonSectionContainer } from '@/types/main.interface';

export default function MainCommonSectionContainer({
	children,
	name,
	isBorder = true,
}: IMainCommonSectionContainer) {
	return (
		<div
			className={`h-full flex flex-col pl-1 pr-2 gap-y-1 items-center 
			${isBorder && 'border-r-[1px] border-neutral-300'}`}
		>
			{children}
			<p className="text-xs font-light text-neutral-600">{name}</p>
		</div>
	);
}
