import MainArticle from './MainArticle';
import MainNav from './nav/MainNav';
import MainSection from './section/MainSection';

export default function Main() {
	return (
		<div className="flex flex-col w-full h-full ">
			<div className="flex flex-col z-[20] relative bg-gray-100 gap-y-2 px-6 pt-2">
				<MainNav />
				<MainSection />
			</div>
			<MainArticle />
		</div>
	);
}
