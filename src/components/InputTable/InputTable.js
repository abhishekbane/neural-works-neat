import React from 'react';

const inputTable = (props) => {
    const tableHead = [];
    let tableRows = [];
    let tableIndex = 0;
    let tableBody = [];
    let setOfInputs = props.tableBody.xi.values.length;

    for(let columnGroup in props.tableBody){

        let totalInputs = props.tableBody[columnGroup].values[0].length !== undefined  ? 
                            props.tableBody[columnGroup].values[0].length 
                            : 1;

        for(let i=0; i<totalInputs; i++){
            //let sub = (<sub>{((props.tableBody[columnGroup].values.length-1) ? i : '')}</sub>);
            tableHead.push(<th 
                            key={`${columnGroup}${i}`} 
                            dangerouslySetInnerHTML={
                                {__html: `${props.tableBody[columnGroup].columnName}<sub>${((props.tableBody[columnGroup].values[0].length-1) ? i : '')}</sub>` }
                                }>
                            </th>);
        }
    }

    for(let indexRow=0; indexRow<setOfInputs; indexRow++){
        for(let columnGroup in props.tableBody){
            if(indexRow < props.tableBody[columnGroup].values.length)
            {
                    let tempTableRows = props.tableBody[columnGroup].values[indexRow].map((element, indexColumn) => {

                    if(columnGroup==='xi' || columnGroup==='target')
                    {
                        return(<td
                            style={{cursor:'pointer'}}
                            key={`${columnGroup}${indexRow}${indexColumn}`} 
                            onClick={(event) => props.elementClicked(event, columnGroup, indexRow, indexColumn)}
                            >{element}</td>);
                    }
                    else{
                        element = element.toFixed(3)
                        return(<td 
                            key={`${columnGroup}${indexRow}${indexColumn}`}
                            >{element}</td>);
                    }
                });
                tableRows.push(tempTableRows);
            }
        }
       
        tableRows.unshift(<td key={`index${indexRow}`}>{++tableIndex}</td>);
        tableBody.push(<tr key={`${indexRow}`}>{tableRows}</tr>);
        tableRows=[];
    }
    
    return(
        <div className="table-container">
        <table className='table is-bordered is-striped'>
            <thead>
                <tr>
                    <th>no.</th>
                    {tableHead}
                </tr>
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </table>
    </div>
    );
};

export default inputTable;