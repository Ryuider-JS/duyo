import {
	CircleIcon,
	FilePlus2Icon,
	ImageIcon,
	RectangleHorizontalIcon,
	TextSelectIcon,
	VideoIcon,
} from 'lucide-react';

import MainColSectionWrapper from './MainColSectionWrapper';
import MainCommonSectionContainer from './MainCommonSectionContainer';
import { iconLgClass } from '@/constants/style.const';

export default function MainInsertSection() {
	return (
		<>
			<MainCommonSectionContainer name="슬라이드">
				<MainColSectionWrapper title="새 슬라이드">
					<FilePlus2Icon className={`${iconLgClass} stroke-[1.45px]`} />
				</MainColSectionWrapper>
			</MainCommonSectionContainer>
			<MainCommonSectionContainer name="텍스트">
				<MainColSectionWrapper title="텍스트 상자">
					<TextSelectIcon className={`${iconLgClass}`} />
				</MainColSectionWrapper>
			</MainCommonSectionContainer>
			<MainCommonSectionContainer name="미디어">
				<div className="flex gap-x-0.5">
					<MainColSectionWrapper title="그림">
						<ImageIcon className={`${iconLgClass} stroke-[1.55px]`} />
					</MainColSectionWrapper>
					<MainColSectionWrapper title="비디오">
						<VideoIcon className={`${iconLgClass} stroke-[1.55px]`} />
					</MainColSectionWrapper>
				</div>
			</MainCommonSectionContainer>
			<MainCommonSectionContainer name="도형">
				<div className="flex gap-x-0.5">
					<MainColSectionWrapper title="사각형" isCursor={true}>
						<RectangleHorizontalIcon className={`${iconLgClass} stroke-[1.55px]`} />
					</MainColSectionWrapper>
					<MainColSectionWrapper title="원" isCursor={true}>
						<CircleIcon className={`${iconLgClass} stroke-[1.55px]`} />
					</MainColSectionWrapper>
				</div>
			</MainCommonSectionContainer>
		</>
	);
}
