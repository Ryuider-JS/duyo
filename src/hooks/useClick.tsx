import { useEffect, useState } from 'react';

import { useFocusStore } from '@/stores/useFocusStore';
import { useHiddenStore } from '@/stores/useHiddenStore';
import { useSizeStore } from '@/stores/useSizeStore';

export default function useClick(idx: number) {
	const [click, setClick] = useState(0);
	const { focus, setFocus } = useFocusStore();
	const { isHidden, setIsHidden } = useHiddenStore();
	const { setDbClickInc, setDbClickDec } = useSizeStore();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (click === 1) {
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
			}
			setClick(0);
		}, 0);

		if (click === 2) {
			if (!isHidden) {
				setDbClickInc();
			} else {
				setDbClickDec();
			}
		}

		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [click]);

	return () => setClick((prev) => prev + 1);
}
