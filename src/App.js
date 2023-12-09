import './App.css';
import Portfolio from './pages/Portfolio';
import Navbar from './components/navbar/Navbar';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
    }
`;

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Navbar />
			<Portfolio className='Portfolio' />
		</div>
	);
}

export default App;