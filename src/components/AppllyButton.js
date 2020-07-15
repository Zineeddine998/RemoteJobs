import React from 'react';

const ApplyButton = props => {

    const handleClick = () => {
        console.log('handle');
        console.log(props.link);
        window.open(props.link, "_blank");
    };
return (
    <div className="buttonapply" onClick={handleClick}>
        {"Apply"}
    </div>
    );
};

export default ApplyButton;