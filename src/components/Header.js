import React from "react";
import { useMediaQuery } from 'react-responsive'


const Header = () => {
    const headerStyle = window.innerWidth > 1200 ? {
        display: "flex",
        flexDirection:  "column",
    } : {
        display: "flex",
        flexDirection:  "row",
    };
    return (
    <header className="header header__bg" style={headerStyle}>
        <h1>The best place to find remote developer jobs</h1>
        <img src='./images/header.png' alt=""/>
    </header>
    )

};


export default Header;