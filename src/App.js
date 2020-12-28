import React from 'react';
import './sass/main.scss';
import Container from './components/Container';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/jobs" component={Container} />
				<Route exact path="/" component={LandingPage} />
			</Switch>
		</Router>
	);
};

export default App;
