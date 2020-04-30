import React, { useState, useEffect } from 'react';
import './donation.css';
import Header from '../../comps/Header';
import QuestionBoxes from '../../comps/QuestionBoxes';
import CustomButtons from '../../comps/CustomButtons';
import HomeButton from '../../comps/HomeButton';
import Icon from '../../comps/Icon';
import Link from 'next/link';


const DonationPage = () => {

    return <div id="donation_page">

        <div className="header_donation_page">
            <Header
                margin="0px 0px 10px 0px"
            />
        </div>

        <QuestionBoxes
            margin="0px 0px 50px 0px"
            size="18px"
            text="Consider donating to TeamTrees.org so they can plant trees all around the world?
            Every dollar equals to 1 tree planted.!"
        />

        <Icon />

        <a href="https://teamtrees.org/"><CustomButtons
            text="Sure!"
            width="230px"
            margin="20px"
        /></a>

        <Link href="/Page1"><div>
            <CustomButtons
                text="No Thank You"
                width="230px"
                margin="50px"
                background="gray"
            />
        </div>
        </Link>

    </div>
}

export default DonationPage;