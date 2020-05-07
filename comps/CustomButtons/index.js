import React from 'react';
import "./cb.css";

const CustomButton = ({text, fontSize, background, fromclick, width, height, color, padding, margin}) => <div id="button_parent"
    style={{fontSize, width, height, background, color, padding, margin:margin}}
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
    width : "130px",
    height : "28px",
    background : "#80AD4D",
    color: "white", 
    padding: "20px",
    margin: "0px",
}
export default CustomButton;

// I need to find out how to do :active for different versions of this component