import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import "./KilometerCounter.css";
import Header from '../../comps/Header';
import Indicator from '../../comps/Indicator';
import QuestionBoxes from '../../comps/QuestionBoxes';
import HomeButton from '../../comps/HomeButton';
import slider from '../../comps/Slider';
import FooterButton1 from '../../comps/FooterButton1';
import FooterButton2 from '../../comps/FooterButton2';
import Slider from '../../comps/Slider';

const KilometerCounter = ({}) => <div className="KilometerCounterPage">
  <div className="header">
  <Header
  />
  </div>
  <div className="questions">
  <QuestionBoxes/>
  </div>
  <div className="slider">
    <Slider/>
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

KilometerCounter.defaultProps = {

}

export default KilometerCounter;