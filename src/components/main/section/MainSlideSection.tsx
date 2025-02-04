import MainColSectionWrapper from './MainColSectionWrapper';
import MainCommonSectionContainer from './MainCommonSectionContainer';
import { PresentationIcon } from 'lucide-react';
import { iconLgClass } from '@/constants/style.const';

export default function MainSlideSection() {
	return (
		<MainCommonSectionContainer name="슬라이드쇼" isBorder={false}>
			<div className="flex gap-x-0.5">
				<MainColSectionWrapper title="처음부터" isCursor={true}>
					<PresentationIcon className={`${iconLgClass} bg-green-50 stroke-green-600`} />
				</MainColSectionWrapper>
				<MainColSectionWrapper title="현재 슬라이드부터" isCursor={true}>
					<PresentationIcon className={`${iconLgClass} bg-blue-50 stroke-blue-600`} />
				</MainColSectionWrapper>
			</div>
		</MainCommonSectionContainer>
	);
}
