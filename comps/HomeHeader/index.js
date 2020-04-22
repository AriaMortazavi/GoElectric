import React from 'react';
import './homeheader.css';

const defaultImg = require('./forest.jpg');

const HomeHeader = ({img}) => <div
className="main"
>
<div className="background">
<img src={img} className="forest"/>
</div>
<div className="opacity" />
<div className="info">
<h1 className="h1">GO-ELECTRIC</h1>
<p className="text p2">Our app is designed to use your <br />input in order to help with the<br /> following:</p>
<p className="text p3">- Save you money</p>
<div className="line1"></div>
<p className="text p4">- Reduce your carbon footprint</p>
<div className="line2"></div>
<p className="text p5">- Reccomend electric vehicles</p>
<div className="line3"></div>
<p className="text p6">- Help the planet</p>
</div>
</div>

HomeHeader.defaultProps = {
    img:defaultImg,
}
export default HomeHeader;