import { IMainColSectionWrapper } from '@/types/main.interface';

export default function MainColSectionWrapper({
	title,
	children,
	isRed = false,
	isCursor = false,
	onClickInsert,
}: IMainColSectionWrapper) {
	return (
		<div
			className={`flex flex-col items-center gap-y-1 rounded px-1.5 py-0.5 transition-all duration-100 
                  ${isRed ? 'hover:bg-red-100 active:bg-red-200' : 'hover:bg-neutral-100 active:bg-neutral-200'} 
                  ${isCursor ? 'cursor-pointer' : 'cursor-not-allowed'}`}
			onClick={onClickInsert && onClickInsert}
		>
			{children || (
				<img
					src="/assets/SVG_Logo.svg"
					alt="SVG Logo"
					className="px-2 rounded select-none size-10 stroke-neutral-600 saturate-0"
				/>
			)}
			<p
				className={`text-[12.7px] font-normal 
				${isRed ? 'text-red-600' : 'text-neutral-600'}`}
			>
				{title}
			</p>
		</div>
	);
}
