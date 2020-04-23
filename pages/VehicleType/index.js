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

const suvImg = require('./suv.png');
const sedanImg = require('./sedan.png');
const motorcycleImg = require('./motorcycle.png');

const VehicleType = ({}) => <div className="vehiclePage">
  <div className="header">
  <Header
  />
  </div>
  <div className="questions">
  <QuestionBoxes
  text = "What type of vehicle do you currently own?"
  />
  </div>
  <div className="imgB">
  <ImageButtons
  img = {suvImg}
  />
  <div className="txt_button">
  <CustomButtons 
  text = "SUV"
  background = "#FFFFFF"
  width = '130px'
  height = "30px"
  color = "black"
  padding = '0px'
  fontSize = "21px"
  />
  </div>
   </div>
   <div className="imgB">
   <ImageButtons
   img = {sedanImg}
   />
   <div className="txt_button">
  <CustomButtons
  text = "Sedan"
  background = "#FFFFFF"
  width = '130px'
  height = "30px"
  color = "black"
  padding = '0px'
  fontSize = "21px"
  />
  </div>
  </div>
  <div className="imgB">
   <ImageButtons
   img = {motorcycleImg}
   />
   <div className="txt_button">
  <CustomButtons 
  text = "Motorcycle"
  background = "#FFFFFF"
  width = '130px'
  height = "30px"
  color = "black"
  padding = '0px'
  fontSize = "21px"
  />
  </div>
  </div>
  <Indicator/>
  <div className="roundHome">
  <HomeButton/>
  </div>
  <div className="footerB">
  <FooterButton1
  padding = "0px"
  />
  </div>
  <div className="footerF">
  <FooterButton2/>
  </div>
</div>

VehicleType.defaultProps = {

}

export default VehicleType;