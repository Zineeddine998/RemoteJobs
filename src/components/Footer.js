import React from 'react';
import Footer from 'rc-footer/es';
import '../sass/main.scss';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';

const FooterComponent = ({ color = '#6200ea' }) => {
	return (
		<Footer
			columns={[
				{
					icon         : <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />,
					title        : 'Remote Tech Jobs made with ❤️ by Zineeddine998',

					openExternal : true
				}
			]}
			bottom="Copyright (c) 2020"
			theme="dark"
			backgroundColor={color}
		/>
	);
};

export default FooterComponent;
