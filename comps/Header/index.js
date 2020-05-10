import React from 'react';
import './header.css';
import {FaChevronLeft} from "react-icons/fa";
import Router from 'next/router';

const defImg = require('./logo.png');

const Header = ({ logo, margin }) => <div
    style={{ margin: margin }}
    className="header">
    {<div>
        <img src={logo} className="logo" />
        <div className="leftarrow">
        <FaChevronLeft size={40} color = "white" onClick={() => Router.back()}/>
    </div>
    </div>}
</div>


Header.defaultProps = {
    logo: defImg,
    margin: "0px",
}
export default Header;