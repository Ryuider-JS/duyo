import { IMainNavButton } from '@/types/nav.interface';
import { useFocusStore } from '@/stores/useFocusStore';
import { useState } from 'react';

// 이벤트 3개
// onMouseDown / onMouseUp / ondblclick
export default function MainNavButton({ value, idx }: IMainNavButton) {
	const { focus, setFocus, setDouble } = useFocusStore();
	const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

	return (
		<div
			className="relative flex flex-col items-center gap-y-0.5 px-2 pt-[6px] pb-1 text-sm rounded outline-none cursor-pointer hover:bg-gray-200 text-neutral-500"
			onClick={() => setFocus(idx)}
			onMouseDown={() => setIsMouseDown(true)}
			onMouseLeave={() => setIsMouseDown(false)}
			onDoubleClick={setDouble}
		>
			<p className={`${idx === focus && 'font-semibold text-neutral-700'}`}>{value}</p>
			<div
				className={`w-full h-[2px] opacity-0 ${isMouseDown && 'bg-neutral-300 opacity-100'} ${idx === focus && 'opacity-100 bg-neutral-700'}`}
			></div>
			{/* {isMouseDown && <div className="w-full h-[1px] border-b-2 border-black"></div>} */}
			{/* {idx === focus && (
				
			)} */}
		</div>
	);
}
