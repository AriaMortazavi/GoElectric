import React, { useState, useEffect } from 'react';
import './resultspage.css';
import Header from '../../comps/Header';
import QuestionBoxes from '../../comps/QuestionBoxes';
import Results from '../../comps/Results';
import CustomButtons from '../../comps/CustomButtons';
import HomeButton from '../../comps/HomeButton';
import Link from 'next/link';

import { data, ChangeData } from '../../data'
console.log("Went to the Results Page", data);

var vehicle = data.vehicleOption;

var sedanSave = data.sedanTotalCost;
var sedanProduce = data.sedanTotalBurn;

var SUVSave = data.SUVTotalCost;
var SUVProduce = data.SUVTotalBurn;

var motorcycleSave = data.motorcycleTotalCost;
var motorcycleProduce = data.motorcycleTotalBurn;



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