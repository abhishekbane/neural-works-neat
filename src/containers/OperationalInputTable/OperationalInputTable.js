import React, {Component} from 'react';
import AddOrRemoveButton from '../../components/UI/Buttons/AddOrRemoveButton/AddOrRemoveButton';
import InputTable from '../../components/InputTable/InputTable';

// prop name to sync table data-> getInputTable

class OperationalInputtable extends Component{

    state={
        table:{
            xi:{
                columnName: 'x',
                values:[
                    [0,0],
                    [0,0],
                    [0,0]
                ]
            },
            target:{
                columnName: 't',
                values:[
                    [0],
                    [0],
                    [0]
                ]
            }
        },
        bias:1,
        disableRemoveColumn: false,
        disableRemoveRow: false,
        disableAddRow: false,
        disableAddColumn: false
    }
    
    clickedAddRowHandler = () => {
        
        let table = JSON.parse(JSON.stringify(this.state.table));
    
        for(let columnGroup in table){
            if(columnGroup==='xi' || columnGroup==='target')
            {
                table[columnGroup].values.push(table[columnGroup].values[0].map(()=>{
                return 0;
                }));
            }
        }

        this.setState({
            table:table
        });
    
        this.props.getInputTable(table);
    
        // will create till 10 rows because rows are first added and then the condition is checked
        if(table.xi.values.length < 6){
            this.setState({
                disableAddRow: false,
                disableRemoveRow: false
            });
        }
        else{
            this.setState({
                disableAddRow: true,
                disableRemoveRow: false
            });
        }
    }
    
    clickedRemoveRowHandler = () => {
    
        let table = JSON.parse(JSON.stringify(this.state.table));
    
        for(let columnGroup in table){
            if(columnGroup==='xi' || columnGroup==='target')
            {
                table[columnGroup].values.pop();
            }
        }

        this.setState({
            table:table
        });
    
        this.props.getInputTable(table);
    
        if(table.xi.values.length > 1){
            this.setState({
                disableAddRow: false,
                disableRemoveRow: false
            });
        }
        else{
            this.setState({
                disableAddRow: false,
                disableRemoveRow: true
            });
        }
    }
    
    clickedAddColumnHandler = () => {
    
        let table = JSON.parse(JSON.stringify(this.state.table))
    
        table.xi.values.map((row) => {
            row.push(0);
            return(row.slice());
        });

        this.setState({
            table:table
        });
    
        this.props.getInputTable(table);
    
        // will create till 6 columns because columns are first added and then the condition is checkeds
        if(table.xi.values[0].length < 6){
            this.setState({
                disableAddColumn: false,
                disableRemoveColumn: false
            });
        }
        else{
            this.setState({
                disableAddColumn: true,
                disableRemoveColumn: false
            });
        }
    
    }
    
    clickedRemoveColumnHandler = () => {
    
        let table = JSON.parse(JSON.stringify(this.state.table))
    
        table.xi.values.map((row) => {
            row.pop();
            return(row.slice());
        });

        this.setState({
            table:table
        });
    
        this.props.getInputTable(table);
    
        if(table.xi.values[0].length > 1){
            this.setState({
                disableAddColumn: false,
                disableRemoveColumn: false
            });
        }
        else{
            this.setState({
                disableAddColumn: false,
                disableRemoveColumn: true
            });
        }
    }
    
    
    clickTableElementHandler = (event, columnGroup, tableRow, tableColumn) => {
        
        let table = JSON.parse(JSON.stringify(this.state.table));
    
        if(event.target.innerText === '0'){
            table[columnGroup].values[tableRow][tableColumn] = 1;
        }
        else if(event.target.innerText === '1'){
            table[columnGroup].values[tableRow][tableColumn] = -1;
        }
        else{
            table[columnGroup].values[tableRow][tableColumn] = 0;
        }
        
        this.setState({
            table:table
        });

        this.props.getInputTable(table);
    }

    render(){
        return(
            <React.Fragment>
                <AddOrRemoveButton 
                        addText={`Add X<sub>${this.state.table.xi.values[0].length}</sub>`} 
                        addClicked={this.clickedAddColumnHandler} 
                        removeClicked={this.clickedRemoveColumnHandler}
                        removeText={`Remove X<sub>${this.state.table.xi.values[0].length-1}</sub`}
                        disableRemove={this.state.disableRemoveColumn}
                        disableAdd={this.state.disableAddColumn}/>
                    
                    <InputTable 
                        tableBody={this.props.inputTable} 
                        elementClicked={this.clickTableElementHandler} />

                    <AddOrRemoveButton 
                        addText={`Add set ${this.state.table.xi.values.length+1}`} 
                        addClicked={this.clickedAddRowHandler} 
                        removeClicked={this.clickedRemoveRowHandler} 
                        removeText={`Remove set ${this.state.table.xi.values.length}`}
                        disableRemove={this.state.disableRemoveRow}
                        disableAdd={this.state.disableAddRow}/>
            </React.Fragment>
        );
    }
}

export default OperationalInputtable;