import { CircleIcon, RectangleHorizontalIcon } from 'lucide-react';

import MainColSectionWrapper from './MainColSectionWrapper';
import MainCommonSectionContainer from './MainCommonSectionContainer';
import { iconLgClass } from '@/constants/style.const';
import { useCircleStore } from '@/stores/useCircleStore';
import { useRectangleStore } from '@/stores/useRectangleStore';

export default function MainCanvasWrapper() {
	const { addRectangle } = useRectangleStore();
	const { addCircle } = useCircleStore();
	return (
		<MainCommonSectionContainer name="도형">
			<div className="flex gap-x-0.5">
				<MainColSectionWrapper title="사각형" isCursor={true} onClickInsert={addRectangle}>
					<RectangleHorizontalIcon className={`${iconLgClass} stroke-[1.55px]`} />
				</MainColSectionWrapper>
				<MainColSectionWrapper title="원" isCursor={true} onClickInsert={addCircle}>
					<CircleIcon className={`${iconLgClass} stroke-[1.55px]`} />
				</MainColSectionWrapper>
			</div>
		</MainCommonSectionContainer>
	);
}
