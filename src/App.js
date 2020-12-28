import React from 'react';
import './sass/main.scss';
import Layout from './hoc/Layout';
import Header from './components/Header';
import Main from './components/Main';
import FooterComponent from './components/Footer';

window.onload = function (){
	fixBrokenImages('https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png');
};
const fixBrokenImages = function (url){
	var img = document.getElementsByTagName('img');
	var i = 0,
		l = img.length;
	for (; i < l; i++) {
		var t = img[i];
		if (t.naturalWidth === 0) {
			//this image is broken
			t.src = url;
		}
	}
};
const App = () => (
	<Layout>
		<Header />
		<Main />
		<FooterComponent />
	</Layout>
);

export default App;
