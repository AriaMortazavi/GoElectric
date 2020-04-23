import React from 'react';
import './header.css';

const defImg = require('./logo.png');

const Header = ({logo}) => <div className="header">
<div>
<img src={logo} className="logo" />
</div>
</div>


Header.defaultProps = {
    logo:defImg,
}
export default Header;