import React from 'react';
import './imagebuttons.css';

const dImage = require('./default.jpg');

const ImageButtons = ({img}) => <div>
<img src ={img} className="imageCont"/>
</div>

ImageButtons.defaultProps = {
    img:dImage,
}

export default ImageButtons;