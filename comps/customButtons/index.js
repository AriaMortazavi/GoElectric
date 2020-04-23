import React from 'react';
import "./cb.css";

const CustomButton = ({text, fontSize, background, fromclick, width, height, color}) => <div id="button_parent"
    style={{fontSize, width, height, background, color}}
    className="custom_button_box">
    <div className="custom_button_box_inner"
    onClick={fromclick}>
        {text}
    </div>
</div>

function buttonClick(){
}

CustomButton.defaultProps = {
    fromclick:buttonClick,
    text : "Gasoline",
    width : "250px",
    height : "40px",
    background : "#80AD4D",
    color: "white", 
}
export default CustomButton;

// I need to find out how to do :active for different versions of this component