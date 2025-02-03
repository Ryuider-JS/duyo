import FooterWrapper from './components/footer/FooterWrapper';
import Header from './components/Header';
import Main from './components/main/Main';

function App() {
	return (
		<div className="flex flex-col w-screen h-screen bg-gray-100">
			<Header />
			<Main />
			<FooterWrapper />
		</div>
	);
}

export default App;
