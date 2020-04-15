import React from 'react';
import FooterButton1 from '../comps/FooterButton1';
import FooterButton2 from '../comps/FooterButton2';

export default {
    title: "Footer",
    component: FooterButton1, FooterButton2
};

export const leftBox = () => <FooterButton1/>
export const rightBox = () => <FooterButton2/>
