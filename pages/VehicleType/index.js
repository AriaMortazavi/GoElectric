import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import "./VehicleType.css";
import Header from '../../comps/Header';
import Indicator from '../../comps/Indicator';
import QuestionBoxes from '../../comps/QuestionBoxes';
import HomeButton from '../../comps/HomeButton';
import CustomButtons from '../../comps/CustomButtons';
import FooterButton1 from '../../comps/FooterButton1';
import FooterButton2 from '../../comps/FooterButton2';
import ImageButtons from '../../comps/ImageButtons';

import { data, ChangeData } from '../../data'

console.log("Went to Vehicle Type page", data);

const suvImg = require('./suv.png');
const sedanImg = require('./sedan.png');
const motorcycleImg = require('./motorcycle.png');

var fuel = data.fuelType;
var burn = data.burnType;

function sedanFuel() {
  ChangeData({
    vehicleOption: "sedan",
    sedanCostPerOneThousand: fuel * 87,
    sedanBurnPerOneThousand: burn * 0.45,
  })
}

function SUVFuel() {
  ChangeData({
    vehicleOption: "SUV",
    SUVCostPerOneThousand: fuel * 140,
    SUVBurnPerOneThousand: burn * 0.72,
  })
}

function motorcycleFuel() {
  ChangeData({
    vehicleOption: "motorcycle",
    motorcycleCostPerOneThousand: fuel * 34,
    motorcycleBurnPerOneThousand: burn * 0.17,
  })
}

const VehicleType = ({ }) => <div className="vehiclePage">

  <div className="header">
    <Header
    />
  </div>
  <div className="questions">
    <QuestionBoxes
      text="What type of vehicle do you currently own?"
    />
  </div>
  <Link href="/KilometerCounter" >
    <div className="imgB" onClick={SUVFuel}>
      <ImageButtons
        img={suvImg}
      />
      <div className="txt_button"  >
        <CustomButtons
          text="SUV"
          background="#FFFFFF"
          width='130px'
          height="30px"
          color="black"
          padding='0px'
          fontSize="21px"
        />
      </div>
    </div>
  </Link>
  <Link href="/KilometerCounter" >
    <div className="imgB" onClick={sedanFuel}>
      <ImageButtons
        img={sedanImg}
      />
      <div className="txt_button" >
        <CustomButtons
          text="Sedan"
          background="#FFFFFF"
          width='130px'
          height="30px"
          color="black"
          padding='0px'
          fontSize="21px"
        />
      </div>
    </div>
  </Link>
  <Link href="/KilometerCounter" >
    <div className="imgB" onClick={motorcycleFuel}>
      <ImageButtons
        img={motorcycleImg}
      />
      <div className="txt_button" >
        <CustomButtons
          text="Motorcycle"
          background="#FFFFFF"
          width='130px'
          height="30px"
          color="black"
          padding='0px'
          fontSize="21px"
        />
      </div>
    </div>
  </Link>
  <Indicator
    border2="2px orange solid"
    active2="orange"
  />
  <Link href="/Page1" >
    <div className="roundHome">
      <HomeButton />
    </div>
  </Link>
  <Link href="/Page2" >
    <div className="footerB">
      <FooterButton1
        padding="0px"
      />
    </div>
  </Link>
  <Link href="/KilometerCounter" >
    <div className="footerF">
      <FooterButton2 />
    </div>
  </Link>
</div>

VehicleType.defaultProps = {

}

export default VehicleType;