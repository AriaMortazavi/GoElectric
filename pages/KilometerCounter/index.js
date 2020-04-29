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

var sedanTotalCost;
var sedanTotalBurn;

var SUVTotalCost;
var SUVTotalBurn;

var motorcycleTotalCost;
var motorcycleTotalBurn;


function pickvehicle() {
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

  <div>
    <CustomButtons
      text="Next"
      width="230px"
      onclick={pickvehicle}
    />
  </div>

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