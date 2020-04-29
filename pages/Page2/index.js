import React from 'react';
import Header from '../../comps/Header';
import CustomButtons from '../../comps/CustomButtons';
import QuestionBoxes from '../../comps/QuestionBoxes';
import ImageButtons from '../../comps/ImageButtons';
import FooterButton1 from '../../comps/FooterButton1';
import FooterButton2 from '../../comps/FooterButton2';
import HomeButton from '../../comps/HomeButton';
import Indicator from '../../comps/Indicator';
import './page2.css';
import Link from 'next/link';


var fuelOption = '';

function pickedGas(){
    fuelOption == "gas";
    pickFuel();
}

function pickedDisel(){
    fuelOption == "disel";
    pickFuel();
}

function pickFuel(){
    if(fuelOption == "gas"){
        fuelType == 1;
        burnType == 1;
    }else if(fuelOption == "disel"){
        fuelType == 1.3;
        burnType == 0.6;
    }
}


const imageOne = require("./gasoline.png");
const imageTwo = require("../Page2/deisel.png");

const Page2 = ({ img }) => <div className="main2">
    <Header />
    <div className="questionOne" >
        <QuestionBoxes text="What type of fuel does your vehicle use?" />
    </div>
    <div className="imageOne">
        <ImageButtons img={imageOne} />
    </div>

    <Link href="/VehicleType">
    <div className="buttonOne">
        <CustomButtons width="260px" height="52px" padding="none" onclick={pickedGas}/>
    </div>
    </Link>

    <div className="imageTwo">
        <ImageButtons img={imageTwo} />
    </div>
    <Link href="/VehicleType">

    <div className="buttonTwo">
        <CustomButtons width="260px" height="52px" padding="none" text="Diesel" onclick={pickedDisel}/>
    </div>
    
    </Link>
    <div className="indicator">
        <Indicator 
          border1 = "2px orange solid"
          active1 = "orange"
        />
    </div>
    <div className="footer">
    <Link href="/Page1">
        <div className="footer1">
            <FooterButton1 />
        </div>
        </Link>

        <Link href="/VehicleType">
            <div className="footer2">
                <FooterButton2 />
            </div>
        </Link>

        <Link href="/Page1"><div className="homeButton"><HomeButton /></div>
        </Link>

    </div>
</div>

Page2.defaultProps = {

}

export default Page2;