import './App.css';
import Portfolio from './pages/Portfolio';
import Navbar from './components/navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {

	const [isDarkMode, setIsDarkMode] = useState(false)

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode)
	}

	return (
		<ThemeProvider theme={{ isDarkMode }}>
			<div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
				<GlobalStyle />
				<Navbar />
				<Portfolio className='Portfolio' isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
			</div>
		</ThemeProvider>
	);
}

export default App;