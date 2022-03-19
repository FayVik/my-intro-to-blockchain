/** @format */
import { Route } from 'react-router-dom';
import './App.css';
import './Assets/Global.module.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import FormView from './Pages/FormView';
import { Switch } from 'react-router-dom';

function App() {
	return (
		<main className='App'>
			<header className='App-header px-10'>
				<Nav />
			</header>
			<Switch>
				<Route path='/FormView' component={FormView} />
				<div className='App-body container mx-auto px-8 lg:px-40 md:px-8 sm:px-8 xs:px-8'>
					<Route path='/' component={Home} />
				</div>
			</Switch>
			<Footer />
		</main>
	);
}

export default App;
