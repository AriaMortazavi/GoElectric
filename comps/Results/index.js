import React from 'react';
import "./results.css";

import { data, ChangeData} from '../../data'

var gas_value = data.gas;
var carbon_value = data.carbon;

const car_1_Img = require('./imgs/def.png');
const car_2_Img = require('./imgs/def.png');

const Results = ({gas_input,carbon_input,img1,img2}) => <div>
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
            <div id="carbon_produce">{carbon_input}</div> less carbon per year
        </div>
        <div id="suggestion">
            <span>We suggest these cars:</span>
            <div id="cars_suggest">
                <div id="cars_box">
                    <div id="car_1">
                        <img src={img1} />
                        <div id="model_name">Model</div>
                    </div>
                    <div id="car_2">
                    <img src={img2} />
                        <div id="model_name">Model</div>
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
}

export default Results;