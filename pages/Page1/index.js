import React from 'react';
import './page1.css';
import CustomButton from '../../comps/CustomButtons';
import HomeHeader from '../../comps/HomeHeader';


const Page1 = ({}) => <div className="main">
    <HomeHeader />
    <div className="buttonCont" >
    <CustomButton 
    text = "Start"
    background = "linear-gradient(to right,#FF11A9, #FFA01D)"
    width = "239px"
    height = "67px"
    padding = "0px"/>
    </div>
    <p className="terms">Please review our Terms of Service</p>
</div>

Page1.defaultProps = {

}

export default Page1;