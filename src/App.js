import React from 'react';
import './sass/main.scss';
import Layout from './hoc/Layout';
import Header from './components/Header';
import Main from './components/Main';
import FooterComponent from './components/Footer';

const App = () => (
	<Layout>
		<Header />
		<Main />
		<FooterComponent />
	</Layout>
);

export default App;
