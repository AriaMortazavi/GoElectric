import React from 'react';
import "./Slider.css";

import { data, ChangeData } from '../../pages/data'
console.log("Slider",data);

const Slider = () => <div id="slider">

  <div id="slider_bar">
    <div id="line"></div>
    <div id="dots">
      <div className="dot" id="option1" onClick={Option1Active}>
        <p className="text">10K</p>
      </div>
      <div className="dot" id="option2" onClick={Option2Active}>
        <p className="text">20K</p>
      </div>
      <div className="dot" id="option3" onClick={Option3Active}>
        <p className="text">30K</p>
      </div>
    </div>
  </div>
</div>

var value = data.input_value;

function Option1Active() {
  document.querySelector("#option1").style.backgroundColor = "lightgreen";
  value = 1;
  console.log(value);
}

function Option2Active() {
  document.querySelector("#option2").style.backgroundColor = "lightgreen";
  value = 2;
  console.log(value);

}

function Option3Active() {
  document.querySelector("#option3").style.backgroundColor = "lightgreen";
  value = 3;
  console.log(value);

}

export default Slider