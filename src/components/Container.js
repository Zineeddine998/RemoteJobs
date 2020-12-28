import React from 'react';
import '../sass/main.scss';
import Layout from '../hoc/Layout';
import Header from './Header';
import Main from './Main';
import FooterComponent from './Footer';

const Container = () => {
	return (
		<Layout>
			<Header />
			<Main />
			<FooterComponent />
		</Layout>
	);
};

export default Container;
