import { IMainNavButton } from '@/types/store.interface';
import { useFocusStore } from '@/stores/useFocusStore';
import { useHiddenStore } from '@/stores/useHiddenStore';
import { useSizeStore } from '@/stores/useSizeStore';
import { useState } from 'react';

export default function MainNavButton({ value, idx }: IMainNavButton) {
	const { focus, setFocus } = useFocusStore();
	const { isHidden, setIsHidden } = useHiddenStore();
	const { setDbClickInc, setDbClickDec } = useSizeStore();

	const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

	let clickTimer: NodeJS.Timeout | null = null;

	const onClickNav = () => {
		if (clickTimer) return;

		clickTimer = setTimeout(() => {
			console.log('click');
			if (isHidden) {
				setIsHidden();
				setFocus(idx);
			} else {
				if (idx === focus) {
					setIsHidden();
				} else {
					setFocus(idx);
				}
			}
			clickTimer = null;
		}, 200);
	};

	const onDoubleClickNav = () => {
		if (clickTimer) {
			clearTimeout(clickTimer);
			clickTimer = null;
		}
		if (!isHidden) {
			setDbClickInc();
		} else {
			setDbClickDec();
		}
	};

	return (
		<div
			className="relative flex flex-col items-center gap-y-0.5 px-2 pt-[6px] pb-1 text-sm rounded outline-none cursor-pointer hover:bg-gray-200 text-neutral-500"
			onClick={onClickNav}
			onMouseDown={() => setIsMouseDown(true)}
			onMouseUp={() => setIsMouseDown(false)}
			onDoubleClick={onDoubleClickNav}
		>
			<p className={`${idx === focus && 'font-semibold text-neutral-700'}`}>{value}</p>
			<div
				className={`w-full h-[2px] opacity-0 ${isMouseDown && 'bg-neutral-300 opacity-100'} ${idx === focus && 'opacity-100 bg-neutral-700'}`}
			></div>
		</div>
	);
}
