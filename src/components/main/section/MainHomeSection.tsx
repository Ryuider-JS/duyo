import {
	ClipboardPasteIcon,
	FilePlus2Icon,
	FilesIcon,
	LayoutPanelTopIcon,
	ScanTextIcon,
	ScissorsIcon,
	Trash2Icon,
} from 'lucide-react';
import { iconLgClass, iconSmClass } from '@/constants/style.const';

import MainCancelWrapper from './MainCancelWrapper';
import MainColSectionWrapper from './MainColSectionWrapper';
import MainCommonSectionContainer from './MainCommonSectionContainer';
import MainRowSectionWrapper from './MainRowSectionWrapper';

export default function MainHomeSection() {
	return (
		<>
			<MainCancelWrapper />
			<MainCommonSectionContainer name="클립보드">
				<div className="flex gap-x-0.5">
					<MainColSectionWrapper title="붙여넣기">
						<ClipboardPasteIcon className={`${iconLgClass} stroke-[1.45px]`} />
					</MainColSectionWrapper>
					<div className="flex flex-col gap-y-1">
						<MainRowSectionWrapper name="자르기">
							<ScissorsIcon className={iconSmClass} />
						</MainRowSectionWrapper>
						<MainRowSectionWrapper name="복사">
							<FilesIcon className={iconSmClass} />
						</MainRowSectionWrapper>
					</div>
				</div>
			</MainCommonSectionContainer>
			<MainCommonSectionContainer name="삭제">
				<MainColSectionWrapper title="삭제" isRed={true}>
					<Trash2Icon className={`${iconLgClass} stroke-[1.45px] stroke-red-500`} />
				</MainColSectionWrapper>
			</MainCommonSectionContainer>
			<MainCommonSectionContainer name="새 슬라이드">
				<div className="flex gap-x-0.5">
					<MainColSectionWrapper title="새 슬라이드">
						<FilePlus2Icon className={`${iconLgClass} stroke-[1.45px]`} />
					</MainColSectionWrapper>
					<div className="flex flex-col gap-y-1">
						<MainRowSectionWrapper name="복사">
							<ScanTextIcon className={iconSmClass} />
						</MainRowSectionWrapper>
						<MainRowSectionWrapper name="템플릿">
							<LayoutPanelTopIcon className={iconSmClass} />
						</MainRowSectionWrapper>
					</div>
				</div>
			</MainCommonSectionContainer>
		</>
	);
}
