import { Redo2Icon, Undo2Icon } from 'lucide-react';

import MainCommonSectionContainer from './MainCommonSectionContainer';
import { iconMdClass } from '@/constants/style.const';
import { useState } from 'react';

export default function MainCancelWrapper() {
	const [isHoverUndo, setIsHoverUndo] = useState<boolean>(false);
	const [isHoverRedo, setIsHoverRedo] = useState<boolean>(false);

	return (
		<MainCommonSectionContainer name="실행 취소">
			<div className="relative">
				<Undo2Icon
					className={iconMdClass}
					onMouseOver={() => setIsHoverUndo(true)}
					onMouseOut={() => setIsHoverUndo(false)}
				/>
				{isHoverUndo && (
					<div className="absolute top-[-28px] left-[-18px] w-16 bg-neutral-800 rounded text-white text-xs font-extralight p-1.5  flex justify-center items-center">
						실행 취소
					</div>
				)}
			</div>
			<div className="relative">
				<Redo2Icon
					className={iconMdClass}
					onMouseOver={() => setIsHoverRedo(true)}
					onMouseOut={() => setIsHoverRedo(false)}
				/>
				{isHoverRedo && (
					<div className="absolute top-[-28px] left-[-18px] w-16 bg-neutral-800 rounded text-white text-xs font-extralight p-1.5  flex justify-center items-center">
						다시 실행
					</div>
				)}
			</div>
		</MainCommonSectionContainer>
	);
}
