import React from 'react';

const addButton = (props) => {
    return(
        <button className='button is-small is-light' onClick={props.clicked}>
            {props.children}
        </button>
    );
}

export default addButton;