import React, { useState, useEffect } from 'react';

const Avatar = ({ logo }) => {
	const [ icon, setIcon ] = useState(logo);

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
	useEffect(
		() => {
			setIcon('//logo.clearbit.com/' + logo);
			window.onload = function (){
				fixBrokenImages('https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png');
			};
		},
		[ logo ]
	);

	return (
		<img className="listing__logo" src={icon} style={{ borderRadius: '50%', backgroundColor: 'white' }} alt="" />
	);
};

export default Avatar;
