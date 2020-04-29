import React from 'react';
import "./Slider.css";

const Slider = () => <div id="Slider">
<div id="counter">
    <ul class="range-labels">
    <li>10k</li>
    <li>20k</li>
    <li>30k</li>
    </ul>
</div>
<div class="range">
  <input type="range" min="1" max="3" id="inputVal"></input>
</div>
</div>



export default Slider