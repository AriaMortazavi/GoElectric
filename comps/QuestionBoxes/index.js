import React from 'react';
import './questionboxes.css';



const QuestionBoxes = ({text, margin, height}) => <div
style={{margin:margin, height:height}}>
<div className="textCont">
{text}
</div>
</div>

QuestionBoxes.defaultProps = {
    text:"default text",
    margin: "0px",
    height: "118px",
}

export default QuestionBoxes;