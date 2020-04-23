import React from 'react';
import './questionboxes.css';

const QuestionBoxes = ({text, margin, height, size}) => <div
style={{margin:margin, height:height, fontSize:size}}>
<div className="textCont">
{text}
</div>
</div>

QuestionBoxes.defaultProps = {
    text:"default text",
    margin: "0px",
    height: "118px",
    size: "24px"
}

export default QuestionBoxes;