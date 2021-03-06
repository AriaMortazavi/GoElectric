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

const ResultsPage = () => {

    return <div id="results_page">
<div className="results_header">
        <Header
            margin="0px 0px 10px 0px"
        />
</div>
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

        <Link href="/Page1"><div className="home_button"><HomeButton /></div>
        </Link>


    </div>
}

export default ResultsPage;