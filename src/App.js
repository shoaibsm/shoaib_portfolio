import './App.css';
import Portfolio from './pages/Portfolio';
import Navbar from './components/navbar/Navbar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Portfolio className='Portfolio' />
		</div>
	);
}

export default App;