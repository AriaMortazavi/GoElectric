import React from 'react';
import Header from '../../comps/Header';
import CustomButtons from '../../comps/CustomButtons';
import QuestionBoxes from '../../comps/QuestionBoxes';
import ImageButtons from '../../comps/ImageButtons';
import HomeButton from '../../comps/HomeButton';
import Indicator from '../../comps/Indicator';
import './page2.css';
import Link from 'next/link';

import { data, ChangeData } from '../../data'
console.log(data);

function pickedGas() {
    ChangeData({
        fuelType: 1,
        burnType: 1
    })
}

function pickedDisel() {
    ChangeData({
        fuelType: 1.3,
        burnType: 0.6
    })
}


const imageOne = require("./gasoline.png");
const imageTwo = require("../Page2/deisel.png");

const Page2 = () => <div className="main2">
    <div className="page2_header">
        <Header />
    </div>
    <div className="questionOne" >
        <QuestionBoxes text="What type of fuel does your vehicle use?" />
    </div>
    <div className="imageOne">
        <ImageButtons img={imageOne} />
    </div>

    <Link href="/VehicleType" >
        <div className="buttonOne" onClick={pickedGas}>
            <CustomButtons width="260px" height="52px" padding="none" />
        </div>
    </Link>

    <div className="imageTwo">
        <ImageButtons img={imageTwo} />
    </div>

    <Link href="/VehicleType">
        <div className="buttonTwo" onClick={pickedDisel}>
            <CustomButtons width="260px" height="52px" padding="none" text="Diesel" />
        </div>
    </Link>
    <div className="indicator">
        <Indicator
            border1="2px orange solid"
            active1="orange"
        />
    </div>

        <Link href="/Page1"><div className="homeButton"><HomeButton /></div>
        </Link>

    </div>

Page2.defaultProps = {

}

export default Page2;