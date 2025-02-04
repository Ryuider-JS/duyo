import MainFileSection from './MainFileSection';
import MainHelpSection from './MainHelpSection';
import MainHomeSection from './MainHomeSection';
import MainInsertSection from './MainInsertSection';
import MainSlideSection from './MainSlideSection';
import { useFocusStore } from '@/stores/useFocusStore';

export default function MainSection() {
	const { focus } = useFocusStore();
	const componentArray = [
		<MainFileSection key="file" />,
		<MainHomeSection key="home" />,
		<MainInsertSection key="insert" />,
		<MainSlideSection key="slide" />,
		<MainHelpSection key="help" />,
	];

	return (
		<section className="border shadow min-h-24 flex w-full items-center gap-x-1.5 rounded-lg px-1.5 py-2 bg-white ">
			<div
				className={`flex items-center w-full ${focus !== 4 && 'animate-fadeIn'}`}
				key={focus}
			>
				{componentArray[focus]}
			</div>
		</section>
	);
}
