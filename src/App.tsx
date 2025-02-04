import Footer from './components/footer/Footer';
import Header from './components/Header';
import Main from './components/main/Main';

function App() {
	return (
		<div className="flex flex-col w-screen h-screen bg-gray-100 select-none ">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
