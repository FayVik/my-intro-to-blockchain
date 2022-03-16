/** @format */

import './App.css';
import './Assets/Global.module.css';
import Nav from './Components/Nav';
import Home from './Components/Home';

function App() {
	return (
		<main className='App'>
			<header className='App-header px-4'>
				<Nav />
			</header>
			<div className='App-body container mx-auto px-8 lg:px-40 md:px-8 sm:px-8 xs:px-8'>
				<Home />
			</div>
		</main>
	);
}

export default App;
