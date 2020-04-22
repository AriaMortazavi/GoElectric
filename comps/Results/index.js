import React from 'react';
import "./results.css";

const Results = () => <div>
    <div id="results">
        <div id="header">
            By switching to electric:
        </div>
        <div id="saving">
            <span>You are saving:</span><br />
            $<div id="gas_save">X</div> in gas per year
        </div>
        <div id="produce">
            <span>You produce:</span><br />
            <div id="carbon_produce">X</div> less carbon per year
        </div>
        <div id="suggestion">
            <span>We suggest these cars:</span>
            <div id="cars_suggest">
                <div id="cars_box">
                    <div id="car_1">
                        <img src="" />
                        <div id="model_name">Model</div>
                    </div>
                    <div id="car_2">
                    <img src="" />
                        <div id="model_name">Model</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

export default Results;