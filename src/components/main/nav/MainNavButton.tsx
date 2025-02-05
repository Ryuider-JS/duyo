import { IMainNavButton } from '@/types/store.interface';
import useClick from '@/hooks/useClick';
import { useFocusStore } from '@/stores/useFocusStore';
import { useState } from 'react';

export default function MainNavButton({ value, idx }: IMainNavButton) {
	const { focus } = useFocusStore();
	const click = useClick(idx);

	const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

	return (
		<div
			className="relative flex flex-col items-center gap-y-0.5 px-2 pt-[6px] pb-1 text-sm rounded outline-none cursor-pointer hover:bg-gray-200 text-neutral-500"
			onClick={click}
			onMouseDown={() => setIsMouseDown(true)}
			onMouseUp={() => setIsMouseDown(false)}
			onDoubleClick={click}
		>
			<p className={`${idx === focus && 'font-semibold text-neutral-700'}`}>{value}</p>
			<div
				className={`w-full h-[2px] opacity-0 ${isMouseDown && 'bg-neutral-300 opacity-100'} ${idx === focus && 'opacity-100 bg-neutral-700'}`}
			></div>
		</div>
	);
}
