import React from 'react';
import './header.css';
import {FaChevronLeft} from "react-icons/fa";

const defImg = require('./logo.png');

const Header = ({ logo, margin }) => <div
    style={{ margin: margin }}
    className="header">
    <div className="arrow">
        <FaChevronLeft size={40} color = "white"/>
    </div>
   <div className="logo">
        <img src={logo} className="logo" />
    </div>   
  
</div>


Header.defaultProps = {
    logo: defImg,
    margin: "0px",
}
export default Header;