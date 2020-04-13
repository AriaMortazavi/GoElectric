import React from 'react';
import "./cb.css";

const CustomButton = ({text, color, fromclick}) => <div 
    style={{backgroundColor:color, boxShadow:"1px 1px 5px" + color}}
    className="custom_button_box">
    <div className="custom_button_box_inner"
    onClick={fromclick}>
        {text}
    </div>
</div>

function buttonClick(){
}

CustomButton.defaultProps = {
    text: "Default Button",
    color: "rgb(103, 215, 81)",
    fromclick:buttonClick
}
export default CustomButton;
