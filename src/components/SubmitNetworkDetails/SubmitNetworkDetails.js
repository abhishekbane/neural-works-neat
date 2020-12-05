import React from "react";
import axios from 'axios';

import SendButton from '../UI/Buttons/SendButton/SendButton';

/*
    Need to use context
*/

const sendData = (
                    networkPath, 
                    table,
                    otherNetworkProps, 
                    getNetworkProperties) => {
        
    const body = table.xi.values.map( row => {return row.slice()});
    const target = table.target.values.map( row => {return row.slice()});

    const tableToSend = {
        body: body,
        target: target,
        ...otherNetworkProps
    }

    axios({
        method: 'post',
        url: `https://neuralworksneat.herokuapp.com/${networkPath}`,
        data: tableToSend,
        headers:{'content-type':'application/json'}
    }).then(response => {
        getNetworkProperties(response.data);
    })
};

const submitNetworkDetails = (props) => {
    return(
        <SendButton clicked={() => {
            props.onClick();
            sendData(props.networkPath, 
            props.inputTable, 
            props.otherNetworkProps, 
            props.getNetworkProperties);
        }}>Calculate</SendButton>
    );
}

export default submitNetworkDetails;