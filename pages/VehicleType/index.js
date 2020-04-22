import React from 'react';
import "./VehicleType.css";
import Header from '../../comps/Header';
import Indicator from '../../comps/Indicator';
import QuestionBoxes from '../../comps/QuestionBoxes';
import HomeButton from '../../comps/HomeButton';
import CustomButtons from '../../comps/CustomButtons';
import FooterButton1 from '../../comps/FooterButton1';
import FooterButton2 from '../../comps/FooterButton2';
import ImageButtons from '../../comps/ImageButtons';

const VehicleType = ({}) => <div className="vehiclePage">
  <div className="header">
  <Header
  />
  </div>
  <div className="questions">
  <QuestionBoxes/>
  </div>
  <div className="imgB">
  <ImageButtons/>
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
   <ImageButtons/>
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
   <ImageButtons/>
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