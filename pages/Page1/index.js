import React from 'react';
import './page1.css';
import CustomButton from '../../comps/CustomButtons';
import HomeHeader from '../../comps/HomeHeader';
import Link from 'next/link';

const Page1 = ({ }) => <div className="main">
    <HomeHeader />
    <Link href="/Page2">
        <div className="buttonCont" >
            <CustomButton
                text="Start"
                background="linear-gradient(to right,#FF11A9, #FFA01D)"
                width="239px"
                height="67px"
                padding="0px" />
        </div>
    </Link>
    <p className="terms_text">Please review our Terms of Service</p>
</div>

Page1.defaultProps = {

}

export default Page1;