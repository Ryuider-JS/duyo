import { Image } from 'lucide-react';
import MainColSectionWrapper from './MainColSectionWrapper';
import MainCommonSectionContainer from './MainCommonSectionContainer';

export default function MainHomeSection() {
	return (
		<MainCommonSectionContainer name="저장">
			<div className="flex gap-x-0.5">
				<MainColSectionWrapper title="SVG로 저장" />
				<MainColSectionWrapper title="PNG로 저장">
					<Image className="px-2 rounded select-none size-10 stroke-neutral-600" />
				</MainColSectionWrapper>
			</div>
		</MainCommonSectionContainer>
	);
}
