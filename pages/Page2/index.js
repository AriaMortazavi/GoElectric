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
    <div className="buttonOne">
        <CustomButtons width="260px" height="52px" padding="none" />
    </div>
    <div className="imageTwo">
        <ImageButtons img={imageTwo} />
    </div>
    <div className="buttonTwo">
        <CustomButtons width="260px" height="52px" padding="none" text="Diesel" />
    </div>
    <div className="indicator">
        <Indicator />
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