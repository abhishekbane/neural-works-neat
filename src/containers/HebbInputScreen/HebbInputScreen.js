import React, {Component} from 'react';

import SubmitNetworkDetails from '../../components/SubmitNetworkDetails/SubmitNetworkDetails';
import OperationalInputTable from '../OperationalInputTable/OperationalInputTable';
import ResultModal from '../../components/ResultModal/ResultModal';

class HebbInputScreen extends Component {

    networkOutput = null;

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
        networkOutput: [],
        bias: 1,
        showOutput: false,
        outputFetched: false
    }

    closeModal = () => {
        this.setState({
            showOutput: false,
            networkOutput: []
        })
    }

    getNetworkProperties = (data) => {
        const networkOutput = data.tables.map((table) => {return {...this.state.table , ...table}});
        
        this.setState(
            {
                networkOutput: networkOutput
            }
        );
        
    };

    getInputTable = (table) => {
        this.setState({
            table: table
        });
    };


    render() {
        return(
            <div className='tile is-parent'>
                <div className='container'>
                    <ResultModal 
                        closeModal={ this.closeModal } 
                        resultsFetched={ this.state.outputFetched } 
                        showResults={ this.state.showOutput }  
                        networkOutput={ this.state.networkOutput } />

                    <OperationalInputTable inputTable={this.state.table} getInputTable={this.getInputTable}/>
                    <SubmitNetworkDetails 
                        onClick={ () => this.setState({
                            showOutput: true
                        }) }
                        getNetworkProperties={this.getNetworkProperties} 
                        networkPath='HebbCalculation.php' 
                        inputTable={this.state.table} 
                        otherNetworkProps={{bias:this.state.bias}}/>
                </div>
            </div>
        );
    }
}

export default HebbInputScreen;