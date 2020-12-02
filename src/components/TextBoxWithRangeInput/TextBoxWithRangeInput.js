import React from 'react';
import RangeSlider from '../RangeSlider/RangeSlider';

let selectedValue = 0;

const rangeSelected = (event, getData) => {
    selectedValue = event.target.value
    getData(selectedValue);
};

const textBoxWithRangeInput = (props) => {
    return(
        <div>
            <label className='label'>{props.label}</label>
            <input className='input' readOnly type='text' value={props.displayValue}/><br/><br/>
            <RangeSlider getData={props.getData} rangeSelected={rangeSelected}/> <br/><br/>
        </div>
    );
};

export default textBoxWithRangeInput;