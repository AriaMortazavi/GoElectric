import React from 'react';
import './imagebuttons.css';

const dImage = require('./default.jpg');

const ImageButtons = () => <div>

<img src ={dImage} className="imageCont"/>

</div>

ImageButtons.defaultProps = {
    img:dImage
}
export default ImageButtons;