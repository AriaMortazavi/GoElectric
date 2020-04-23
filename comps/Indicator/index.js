import React from 'react';
import "./indicator.css";

const Indicator = ({active1, active2, active3, border1, border2, border3}) => <div>
    <div id="indicator">
        <div style={{backgroundColor:active1, border:border1}} id="dot1"></div>
        <div style={{backgroundColor:active2, border:border2}} id="dot2"></div>
        <div style={{backgroundColor:active3, border:border3}} id="dot3"></div>

        {/* <div id="dot_active"></div> */}
    </div>
</div>

Indicator.defaultProps = {
    active1: "none",
    active2: "none",
    active3: "none",
    border1: "2px gray solid",
    border2: "2px gray solid",
    border3: "2px gray solid",
}

export default Indicator;