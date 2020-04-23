import React from 'react';
import HomeHeader from '../comps/HomeHeader';
import Header from '../comps/Header';
import ImageButtons from '../comps/ImageButtons';
import QuestionBoxes from '../comps/QuestionBoxes';

export default {
    title:"Ian's Comps",
    component: HomeHeader
};

export const homeheader = () => <HomeHeader />
export const header = () => <Header />
export const imagebuttons = () => <ImageButtons />
export const questionboxes = () => <QuestionBoxes />
