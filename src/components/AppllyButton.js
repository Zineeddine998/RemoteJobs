import React from 'react';

const ApplyButton = (props) => {
	const handleClick = () => {
		window.open(props.link, '_blank');
	};
	return (
		<div className="buttonapply" onClick={handleClick}>
			{'Apply'}
		</div>
	);
};

export default ApplyButton;
