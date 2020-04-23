import React, { useState, useEffect } from 'react';
import './resultspage.css';
import Header from '../../comps/Header';
import QuestionBoxes from '../../comps/QuestionBoxes';
import Results from '../../comps/Results';
import CustomButtons from '../../comps/CustomButtons';
import HomeButton from '../../comps/HomeButton';
import FooterButton1 from '../../comps/FooterButton1';
import FooterButton2 from '../../comps/FooterButton2';

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

        <CustomButtons
            text="Next"
            width="230px"
            margin="10px 0px 90px 0px"
        />

        <div className="home_button"><HomeButton /></div>

        <div className="footerB">
            <FooterButton1
                padding="0px"
            />
        </div>
        <div className="footerF">
            <FooterButton2 />
        </div>
    </div>
}

export default ResultsPage;