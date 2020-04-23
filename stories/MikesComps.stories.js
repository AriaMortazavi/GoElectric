import React from 'react';
import Results from '../comps/Results'
import Indicator from '../comps/Indicator'
import Icon from '../comps/Icon'

export default {
  title: 'Mike\'s Components',
  component: Results, Indicator, Icon
};

export const ResultsComp = () => <Results />;
export const IndicatorComp = () => <Indicator />;
export const IconComp = () => <Icon />;
