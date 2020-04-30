import React, { useState, useEffect } from 'react';
import './resultspage.css';
import Header from '../../comps/Header';
import QuestionBoxes from '../../comps/QuestionBoxes';
import Results from '../../comps/Results';
import CustomButtons from '../../comps/CustomButtons';
import HomeButton from '../../comps/HomeButton';
import Link from 'next/link';
import VehicleType from '../VehicleType';

import { data, ChangeData } from '../data'
console.log(data);

function PrintResults() {
    if (vehicleOption == "sedan") {
        document.querySelector("#gas_save").innerText = sedanTotalCost;
        document.querySelector("#carbon_produce").innerText = sedanTotalBurn;
    } else if (vehicleOption == "SUV") {
        document.querySelector("#gas_save").innerText = SUVTotalCost;
        document.querySelector("#carbon_produce").innerText = SUVTotalBurn;
    } else if (vehicleOption == "motorcycle") {
        document.querySelector("#gas_save").innerText = motorcycleTotalCost;
        document.querySelector("#carbon_produce").innerText = motorcycleTotalBurn;
    }
}

PrintResults();

const ResultsPage = () => {

    return <div id="results_page">

        <Header
            margin="0px 0px 10px 0px"
        />

        <QuestionBoxes
            margin="0px 0px 10px 0px"
            text="Results are in!"
        />

        <Results />

        <Link href="/DonationPage"><div><CustomButtons
            text="Next"
            width="230px"
            margin="10px 0px 90px 0px"
        /></div>

        </Link>

        <Link href="/Page1"><div id="home_button"><HomeButton /></div>
        </Link>


    </div>
}

export default ResultsPage;