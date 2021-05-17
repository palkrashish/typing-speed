import React from 'react';
import logo from './../../assert/flash.png';
import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">Flash Typing</p>

            </div>
            
        </div>
    )
}

export default Nav
