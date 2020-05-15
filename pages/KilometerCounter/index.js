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

import { slider_value } from '../../comps/Slider'

var Sedan1KCost = data.sedanCostPerOneThousand;
var Sedan1KBurn = data.sedanBurnPerOneThousand;
var SUV1KCost = data.SUVCostPerOneThousand;
var SUV1KBurn = data.SUVBurnPerOneThousand;
var Moto1KCost = data.motorcycleCostPerOneThousand;
var Moto1KBurn = data.motorcycleBurnPerOneThousand;
var vehicle = data.vehicleOption;

function sedanKMCounter() {
  if (slider_value === 1) {
    ChangeData({
      gas: parseInt(Sedan1KCost * 10),
      carbon: (Sedan1KBurn * 10).toFixed(2),
    })
  } else if (slider_value === 2) {
    ChangeData({
      gas: parseInt(Sedan1KCost * 20),
      carbon: (Sedan1KBurn * 20).toFixed(2),
    })
  } else if (slider_value === 3) {
    ChangeData({
      gas: parseInt(Sedan1KCost * 30),
      carbon: (Sedan1KBurn * 30).toFixed(2),
    })
  }
}

function SUVKMCounter() {
  if (slider_value === 1) {
    ChangeData({
      gas: parseInt(SUV1KCost * 10),
      carbon: (SUV1KBurn * 10).toFixed(2),
    })
  } else if (slider_value === 2) {
    ChangeData({
      gas: parseInt(SUV1KCost * 20),
      carbon: (SUV1KBurn * 20).toFixed(2),
    })
  } else if (slider_value === 3) {
    ChangeData({
      gas: parseInt(SUV1KCost * 30).toFixed(2),
      carbon: (SUV1KBurn * 30).toFixed(2),
    })
  }
}

function motorcycleKMCounter() {
  if (slider_value === 1) {
    ChangeData({
      gas: parseInt(Moto1KCost * 10),
      carbon: (Moto1KBurn * 10).toFixed(2),
      vehicleOption: vehicle
    })
  } else if (slider_value === 2) {
    ChangeData({
      gas: parseInt(Moto1KCost * 20),
      carbon: (Moto1KBurn * 20).toFixed(2),
      vehicleOption: vehicle
    })
  } else if (slider_value === 3) {
    ChangeData({
      gas: parseInt(Moto1KCost * 30),
      carbon: (Moto1KBurn * 30).toFixed(2),
      vehicleOption: vehicle
    })
  }
}

function ToResults() {
  if (slider_value > 0) {
    if (vehicle == "sedan") {
      sedanKMCounter();
    } else if (vehicle == "SUV") {
      SUVKMCounter();
    } else if (vehicle == "motorcycle") {
      motorcycleKMCounter();
    }
  } else {
    alert("Please, select the amount of KM")
  }
}

console.log("Went to Kilomiter Counter page", data);

const KilometerCounter = ({ }) => <div className="KilometerCounterPage">
  <div className="header_KmCounter">
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
    <div id="KMCounterNextButton" onClick={ToResults}>

      <CustomButtons
        text="Next"
        width="230px"
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