import Footer from './components/footer/Footer';
import Header from './components/Header';
import Main from './components/main/Main';
import { useSizeStore } from './stores/useSizeStore';

function App() {
	const { setSizeDec, setSizeInc } = useSizeStore();
	const onWheelSize = (event: React.WheelEvent) => {
		if (event.metaKey) {
			event.deltaY > 0 ? setSizeInc(0.1) : setSizeDec(0.1);
		}
	};
	return (
		<div className="flex flex-col w-screen h-screen bg-gray-100" onWheel={onWheelSize}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
