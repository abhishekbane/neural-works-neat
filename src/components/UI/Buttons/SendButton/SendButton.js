import React from 'react';

const sendButton = (props) => {
    return (
        <button className='button is-dark' onClick={props.clicked}>{props.children}</button>
    );
};

export default sendButton;