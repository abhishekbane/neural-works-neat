import React from 'react';
import './RangeSlider.css';

const rangeSlider = (props) => {
    return(
        <input type='range' step='0.01' onChange={(event) => props.rangeSelected(event, props.getData)} defaultValue='0' min='0' max='1'/>
    );
};

export default rangeSlider;