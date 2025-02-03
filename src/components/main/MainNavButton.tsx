import { IMainNavButton } from '@/types/nav.interface';
import { useFocusStore } from '@/stores/useFocusStore';

// 이벤트 3개
// onMouseDown / onMouseUp / ondblclick
export default function MainNavButton({ value, idx }: IMainNavButton) {
	const { focus, setFocus } = useFocusStore();
	return (
		<div
			className="flex flex-col px-2 py-1 text-sm rounded outline-none cursor-pointer hover:bg-gray-200 text-neutral-500"
			onMouseUp={() => setFocus(idx)}
		>
			<p className={`${idx === focus && 'font-bold text-neutral-700'}`}>{value}</p>
		</div>
	);
}
