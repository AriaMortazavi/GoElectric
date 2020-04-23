import React from 'react';
import './questionboxes.css';



const QuestionBoxes = ({text}) => <div>
<div className="textCont">
{text}
</div>
</div>

QuestionBoxes.defaultProps = {
    text:"default text",
}

export default QuestionBoxes;