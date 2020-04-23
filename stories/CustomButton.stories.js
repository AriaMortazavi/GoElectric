import React from 'react';
import CustomButton from '../comps/CustomButtons';

export default {
    title:"Custom Buttons",
    component:CustomButton
};

export const StartButton = () => <CustomButton 
    fontSize = "38px"
    width = '239px'
    height = "67px"
    text = "Start"
    background = "linear-gradient(to left, #ffa11d 5%, #FF5F5F 100%)"
/>;

export const gasButton = () => <CustomButton 
/>;

export const diselButton = () => <CustomButton 
text = "Disel"
/>;

export const nextButton = () => <CustomButton 
text = "Next"
/>;

export const sureButton = () => <CustomButton 
text = "Sure!"
/>;


export const noButton = () => <CustomButton 
text = "No thank you"
background = "#8E8D8D"
/>;

export const SUVButton = () => <CustomButton 
text = "SUV"
background = "#FFFFFF"
width = '135px'
height = "20px"
color = "black"
/>;

export const SedanButton = () => <CustomButton 
text = "Sedan"
background = "#FFFFFF"
width = '135px'
height = "20px"
color = "black"
/>;

export const MotorcycleButton = () => <CustomButton 
text = "Motorcycle"
background = "#FFFFFF"
width = '135px'
height = "20px"
color = "black"
/>;



