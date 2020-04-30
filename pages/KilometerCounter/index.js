import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import "./KilometerCounter.css";
import Header from '../../comps/Header';
import Indicator from '../../comps/Indicator';
import QuestionBoxes from '../../comps/QuestionBoxes';
import HomeButton from '../../comps/HomeButton';
import CustomButtons from '../../comps/CustomButtons';
import Slider from '../../comps/Slider';

import { data, ChangeData } from '../../data'
console.log("Went to Kilomiter Counter page", data);

/*function pickvehicle() {
  if (vehicleOption == "sedan") {
    sedanKMCounter();
  } else if (vehicleOption == "SUV") {
    SUVKMCounter();
  } else if (vehicleOption == "motorcycle") {
    motorcycleKMCounter();
  }
}

function sedanKMCounter() {
  var sliderInput = document.getElementById('inputVal');
  if (sliderInput.value == 1) {
    sedanTotalCost = sedanCostPerOneThousand * 10;
    sedanTotalBurn == sedanBurnPerOneThousand * 10;
  } else if (sliderInput.value == 2) {
    sedanTotalCost = sedanCostPerOneThousand * 20;
    sedanTotalBurn == sedanBurnPerOneThousand * 20;
  } else if (sliderInput.value == 3) {
    sedanTotalCost = sedanCostPerOneThousand * 30;
    sedanTotalBurn == sedanBurnPerOneThousand * 30;
  }
}

function SUVKMCounter() {
  var sliderInput = document.getElementById('inputVal');
  if (sliderInput.value == 1) {
    SUVTotalCost = SUVCostPerOneThousand * 10;
    SUVTotalBurn == SUVBurnPerOneThousand * 10;
  } else if (sliderInput.value == 2) {
    SUVTotalCost = SUVCostPerOneThousand * 20;
    SUVTotalBurn == SUVBurnPerOneThousand * 20;
  } else if (sliderInput.value == 3) {
    SUVTotalCost = SUVCostPerOneThousand * 30;
    SUVTotalBurn == SUVBurnPerOneThousand * 30;
  }
}

function motorcycleKMCounter() {
  var sliderInput = document.getElementById('inputVal');
  if (sliderInput.value == 1) {
    motorcycleTotalCost = motorcycleCostPerOneThousand * 10;
    motorcycleTotalBurn == motorcycleBurnPerOneThousand * 10;
  } else if (sliderInput.value == 2) {
    motorcycleTotalCost = motorcycleCostPerOneThousand * 20;
    motorcycleTotalBurn == motorcycleBurnPerOneThousand * 20;
  } else if (sliderInput.value == 3) {
    motorcycleTotalCost = motorcycleCostPerOneThousand * 30;
    motorcycleTotalBurn == motorcycleBurnPerOneThousand * 30;
  }
} */

var SedanCost = data.sedanCostPerOneThousand;
var SedanBurn = data.sedanBurnPerOneThousand;
var SUVCost = data.SUVCostPerOneThousand;
var SUVBurn = data.SUVBurnPerOneThousand;
var MotoCost = data.motorcycleCostPerOneThousand;
var MotoBurn = data.motorcycleBurnPerOneThousand;
var vehicle = data.vehicleOption;
var slider_value = data.input_value;

function sedanKMCounter() {
  if(slider_value === 1){
    ChangeData({
      SedanCost: sedanCostPerOneThousand * 10,
      SedanBurn: sedanBurnPerOneThousand * 10,
    })
  } else if(slider_value === 2){
    ChangeData({
      SedanCost: sedanCostPerOneThousand * 20,
      SedanBurn: sedanBurnPerOneThousand * 20,
    })
  } else if(slider_value === 3){
    ChangeData({
      SedanCost: sedanCostPerOneThousand * 30,
      SedanBurn: sedanBurnPerOneThousand * 30,
    })
  }
}

function SUVKMCounter() {
  if(slider_value === 1){
    ChangeData({
      SUVCost: SUVCostPerOneThousand * 10,
      SUVBurn: SUVBurnPerOneThousand * 10,
    })
  } else if(slider_value === 2){
    ChangeData({
      SUVCost: SUVCostPerOneThousand * 20,
      SUVBurn: SUVBurnPerOneThousand * 20,
    })
  } else if(slider_value === 3){
    ChangeData({
      SUVCost: SUVCostPerOneThousand * 30,
      SUVBurn: SUVBurnPerOneThousand * 30,
    })
  }
}

function motorcycleKMCounter() {
  if(slider_value === 1){
    ChangeData({
      MotoCost: motorcycleCostPerOneThousand * 10,
      MotoBurn: motorcycleBurnPerOneThousand * 10,
    })
  } else if(slider_value === 2){
    ChangeData({
      MotoCost: motorcycleCostPerOneThousand * 20,
      MotoBurn: motorcycleBurnPerOneThousand * 20,
    })
  } else if(slider_value === 3){
    ChangeData({
      MotoCost: motorcycleCostPerOneThousand * 30,
      MotoBurn: motorcycleBurnPerOneThousand * 30,
    })
  }
}

function ToResults() {
  if (vehicle == "sedan") {
    sedanKMCounter();
  } else if (vehicle == "SUV") {
    SUVKMCounter();
  } else if (vehicle == "motorcycle") {
    motorcycleKMCounter();
  }
}

const KilometerCounter = ({ }) => <div className="KilometerCounterPage">
  <div className="header">
    <Header
    />
  </div>
  <div className="questions">
    <QuestionBoxes
      text="On average, how many kilometres do you drive every year?"
    />
  </div>
  <div className="slider">
    <Slider />
  </div>

  <Link href="/ResultsPage" >
    <div>
      <CustomButtons
        text="Next"
        width="230px"
        onclick={ToResults}
      />
    </div>
  </Link>

  <Indicator
    border3="2px orange solid"
    active3="orange"

  />
  <Link href="/Page1" >
    <div className="roundHome">
      <HomeButton />
    </div>
  </Link>
</div>

KilometerCounter.defaultProps = {

}

export default KilometerCounter;