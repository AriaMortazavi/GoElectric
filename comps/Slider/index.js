import React from 'react';
import "./Slider.css";

import { data, ChangeData } from '../../data'
console.log("Slider",data);

const Slider = () => <div id="slider">

  <div id="slider_bar">
    <div id="line"></div>
    <div id="dots">
      <div className="dot" id="option1" onClick={Option1Active}>
        <p className="slider_text">10K</p>
      </div>
      <div className="dot" id="option2" onClick={Option2Active}>
        <p className="slider_text">20K</p>
      </div>
      <div className="dot" id="option3" onClick={Option3Active}>
        <p className="slider_text">30K</p>
      </div>
    </div>
  </div>
</div>

export var slider_value = data.input_value;

function Option1Active() {
  document.querySelector("#option1").style.backgroundColor = "lightgreen";
  document.querySelector("#option2").style.backgroundColor = "white";
  document.querySelector("#option3").style.backgroundColor = "white";
  slider_value = 1;
  console.log(slider_value);
}

function Option2Active() {
  document.querySelector("#option1").style.backgroundColor = "white";
  document.querySelector("#option2").style.backgroundColor = "lightgreen";
  document.querySelector("#option3").style.backgroundColor = "white";
  slider_value = 2;
  console.log(slider_value);
}

function Option3Active() {
  document.querySelector("#option1").style.backgroundColor = "white";
  document.querySelector("#option2").style.backgroundColor = "white";
  document.querySelector("#option3").style.backgroundColor = "lightgreen";
  slider_value = 3;
  console.log(slider_value);
}

export default Slider;