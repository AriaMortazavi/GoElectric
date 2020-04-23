import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import "./KilometerCounter.css";
import Header from '../../comps/Header';
import Indicator from '../../comps/Indicator';
import QuestionBoxes from '../../comps/QuestionBoxes';
import HomeButton from '../../comps/HomeButton';
import FooterButton1 from '../../comps/FooterButton1';
import FooterButton2 from '../../comps/FooterButton2';
import Slider from '../../comps/Slider';

const KilometerCounter = ({}) => <div className="KilometerCounterPage">
  <div className="header">
  <Header
  />
  </div>
  <div className="questions">
  <QuestionBoxes
  text = "On average, how many kilometres do you drive every year?"
  />
  </div>
  <div className="slider">
    <Slider/>
  </div>
  <Indicator
    border3 = "2px orange solid"
    active3 = "orange"
  
  />
  <Link href = "/Page1" >
    <div className="roundHome">
    <HomeButton/>
    </div>
  </Link>
  <Link href = "/VehicleType" >
    <div className="footerB">
    <FooterButton1
    padding = "0px"
    />
    </div>
  </Link>
  <Link href = "/ResultsPage" >
    <div className="footerF">
    <FooterButton2/>
    </div>
  </Link>
</div>

KilometerCounter.defaultProps = {

}

export default KilometerCounter;