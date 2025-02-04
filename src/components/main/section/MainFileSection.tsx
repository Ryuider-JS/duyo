import { Image } from 'lucide-react';
import MainColSectionWrapper from './MainColSectionWrapper';
import MainCommonSectionContainer from './MainCommonSectionContainer';
import { iconLgClass } from '@/constants/style.const';

export default function MainFileSection() {
	return (
		<MainCommonSectionContainer name="저장">
			<div className="flex gap-x-0.5">
				<MainColSectionWrapper title="SVG로 저장" isCursor={true} />
				<MainColSectionWrapper title="PNG로 저장" isCursor={true}>
					<Image className={iconLgClass} />
				</MainColSectionWrapper>
			</div>
		</MainCommonSectionContainer>
	);
}
