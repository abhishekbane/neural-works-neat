import React from 'react';

import InputTable from '../InputTable/InputTable';

const resultTables = (props) => {
    const inputTableCollection = props.tableCollection.map((table, index) => <InputTable key={index} elementClicked ={()=>{}}  tableBody={table} />)
    return(
        inputTableCollection
    );
}

export default resultTables
