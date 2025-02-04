import MainNav from './nav/MainNav';
import MainSection from './section/MainSection';

export default function Main() {
	return (
		<div className="flex flex-col justify-between w-full h-full px-6 mt-2">
			<div className="flex flex-col gap-y-2">
				<MainNav />
				<MainSection />
			</div>
			<article></article>
		</div>
	);
}
