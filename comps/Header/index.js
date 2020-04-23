import React from 'react';
import './header.css';

const defImg = require('./logo.png');

const Header = ({ logo, margin }) => <div
    style={{ margin: margin }}
    className="header">
    {<div>
        <img src={logo} className="logo" />
    </div>}
</div>


Header.defaultProps = {
    logo: defImg,
    margin: "0px",
}
export default Header;