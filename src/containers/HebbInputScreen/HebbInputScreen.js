import React, {Component} from 'react';

import SubmitNetworkDetails from '../../components/SubmitNetworkDetails/SubmitNetworkDetails';
import OperationalInputTable from '../OperationalInputTable/OperationalInputTable';
import Modal from '../../components/UI/Modal/Modal';
import ResultTables from '../../components/ResultTables/ResultTables';

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
        bias: 1,
        showOutput: false
    }

    closeModal = () => {
        this.setState({
            showOutput: false
        })
    }

    getNetworkProperties = (data) => {
        this.networkOutput = data.tables.map((table) => {return {...this.state.table , ...table}});
        
        this.setState(
            {
                showOutput: true
            }
        );
    };

    getInputTable = (table) => {
        this.setState({
            table: table
        });
    };

    

    render() {
        const networkOutputModal = this.state.showOutput ? <Modal closeModal={this.closeModal} modalHeader="Results"><ResultTables tableCollection={this.networkOutput} /></Modal> : null;

        return(
            <div className='tile is-parent'>
                <div className='container'>
                    <OperationalInputTable inputTable={this.state.table} getInputTable={this.getInputTable}/>
                    <SubmitNetworkDetails 
                        getNetworkProperties={this.getNetworkProperties} 
                        networkPath='HebbCalculation.php' 
                        inputTable={this.state.table} 
                        otherNetworkProps={{bias:this.state.bias}}/>
                </div>
                {networkOutputModal}
            </div>
        );
    }
}

export default HebbInputScreen;