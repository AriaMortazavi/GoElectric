import React from 'react';
import "./results.css";

import { data, ChangeData } from '../../data'

var gas_value = data.gas;
var carbon_value = data.carbon;

var vehicle = data.vehicleOption;

var car_data = {
    sedan1: "Hyundai Kona",
    sedan2: "Nissan Leaf",
    sedan3: "Tesla Model 3",
    sedan4: "Tesla Model S",

    suv1: "Tesla Model X",
    suv2: "Audi E-Tron",
    suv3: "Porsche Cayenne",
    suv4: "Jaguar I-Pace",

    moto1: "Emmo Zone GTS",
    moto2: "Zero SR",
    moto3: "Energica Ego",
    moto4: "Vespa Elettrica",
}

var model1;
var model2;

var car_1_Img = require('./imgs/def.png');
var car_2_Img = require('./imgs/def.png');

var sedan1Img = require('./imgs/sedan1.jpg');
var sedan2Img = require('./imgs/sedan2.jpg');
var sedan3Img = require('./imgs/sedan3.jpg');
var sedan4Img = require('./imgs/sedan4.jpg');

var suv1Img = require('./imgs/suv1.jpg');
var suv2Img = require('./imgs/suv2.jpg');
var suv3Img = require('./imgs/suv3.jpg');
var suv4Img = require('./imgs/suv4.jpg');

var moto1Img = require('./imgs/moto1.jpg');
var moto2Img = require('./imgs/moto2.jpg');
var moto3Img = require('./imgs/moto3.jpg');
var moto4Img = require('./imgs/moto4.jpg');


export function CarImages() {
    if (gas_value > 200 && gas_value < 2000) {
        car_1_Img = sedan1Img;
        car_2_Img = sedan2Img;

        model1 = car_data.sedan1;
        model2 = car_data.sedan2;
    } else if (gas_value > 2000 && gas_value < 3000) {
        car_1_Img = sedan3Img;
        car_2_Img = sedan4Img;

        model1 = car_data.sedan3;
        model2 = car_data.sedan4;
        //
    } else if (gas_value > 3000 && gas_value < 4000) {
        car_1_Img = suv1Img;
        car_2_Img = suv2Img;

        model1 = car_data.suv1;
        model2 = car_data.suv2;
    } else if (gas_value > 4000) {
        car_1_Img = suv3Img;
        car_2_Img = suv4Img;

        model1 = car_data.suv3;
        model2 = car_data.suv4;
        //
        // } else if (gas_value > 700 && gas_value < 1200) {
        //     car_1_Img = moto1Img;
        //     car_2_Img = moto2Img;

        //     model1 = car_data.moto1;
        //     model2 = car_data.moto2;
        // } else if (gas_value < 700) {
        //     car_1_Img = moto3Img;
        //     car_2_Img = moto4Img;

        //     model1 = car_data.moto3;
        //     model2 = car_data.moto4;
    }
}

CarImages();

function MotoImages() {
    if (vehicle == "motorcycle") {
        if (gas_value > 700) {
            car_1_Img = moto1Img;
            car_2_Img = moto2Img;

            model1 = car_data.moto1;
            model2 = car_data.moto2;
        } else if (gas_value < 700) {
            car_1_Img = moto3Img;
            car_2_Img = moto4Img;

            model1 = car_data.moto3;
            model2 = car_data.moto4;
        }
    }
}

MotoImages();

const Results = ({ gas_input, carbon_input, img1, img2, model1, model2 }) => <div>
    <div id="results">
        <div id="header">
            By switching to electric:
        </div>
        <div id="saving">
            <span>You are saving:</span><br />
            $<div id="gas_save">{gas_input}</div> in gas per year
        </div>
        <div id="produce">
            <span>You produce:</span><br />
            <div id="carbon_produce">{carbon_input}</div> less metric tons of CO2 per year
        </div>
        <div id="suggestion">
            <span>We suggest these cars:</span>
            <div id="cars_suggest">
                <div id="cars_box">
                    <div id="car_1">
                        <img src={img1} />
                        <div id="model_name">{model1}</div>
                    </div>
                    <div id="car_2">
                        <img src={img2} />
                        <div id="model_name">{model2}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

Results.defaultProps = {
    gas_input: gas_value,
    carbon_input: carbon_value,
    img1: car_1_Img,
    img2: car_2_Img,
    model1: model1,
    model2: model2
}

export default Results;