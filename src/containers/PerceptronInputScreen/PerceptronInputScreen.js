import React, {Component} from 'react';

import OperationalInputTable from '../OperationalInputTable/OperationalInputTable';
import SubmitNetworkDetails from '../../components/SubmitNetworkDetails/SubmitNetworkDetails';
import TextBoxWithRangeInput from '../../components/TextBoxWithRangeInput/TextBoxWithRangeInput';
import Modal from '../../components/UI/Modal/Modal';
import ResultTables from '../../components/ResultTables/ResultTables';

class PerceptronInputScreen extends Component {

    networkOutput = [];
    isRecurring = false;
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
        defaultWeight: 0,
        alpha: 0,
        theta: 0,
        showOutput: false
    }

    getInputTable = (table) => {
        const combinedTable = {...this.state.table, ...table}
        this.setState({
            table: combinedTable
        });
    }

    getNetworkProperties = (data) => {
        this.networkOutput = data.tables.map((table) => {return {...this.state.table , ...table}});
        this.isRecurring = data.isRecurring;
        this.setState(
            {
                showOutput: true
            }
        );
    }

    getDefaultWeight = (weightValue) => {
        
        this.setState({
            defaultWeight: weightValue
        })

    }

    closeModal = () => {
        this.setState({
            showOutput: false
        });
    }

    getAlpha = (alphaValue) => {
        this.setState({
            alpha: alphaValue
        })
    }

    getTheta = (thetaValue) => {
        this.setState({
            theta: thetaValue
        })
    }

    render(){
        let resultModal;

        const recurring = this.isRecurring ? <p>Showing top 10 epochs as the result is recurring...</p> : null;

        resultModal = this.state.showOutput 
            ? <Modal modalHeader="Results" closeModal={this.closeModal}>{recurring}<ResultTables tableCollection={this.networkOutput}/></Modal> 
            : null;
        
        return(
            <div>
                <div className='tile is-parent'>
                    <div className='container'>
                        <OperationalInputTable inputTable={this.state.table} getInputTable={this.getInputTable} />
                        <div className='columns'>
                            <div className='column'>
                                <TextBoxWithRangeInput
                                    key='1'
                                    label='Default Weight' 
                                    displayValue={this.state.defaultWeight} 
                                    getData={this.getDefaultWeight}/>
                            </div>
                            <div className='column'>
                                <TextBoxWithRangeInput 
                                    key='2'
                                    label='Alpha' 
                                    displayValue={this.state.alpha} 
                                    getData={this.getAlpha}/>
                            </div>
                            <div className='column'>
                                <TextBoxWithRangeInput 
                                    key='3'
                                    label='Theta' 
                                    displayValue={this.state.theta} 
                                    getData={this.getTheta}/>
                            </div>
                        </div>
                        <SubmitNetworkDetails 
                            getNetworkProperties={this.getNetworkProperties} networkPath='PerceptronCalculation.php' 
                            inputTable={this.state.table}
                            otherNetworkProps={{
                                                bias: this.state.bias,
                                                alpha: this.state.alpha,
                                                theta: this.state.theta,
                                                defaultWeight: this.state.defaultWeight
                                            }}
                            defaultWeight={this.state.defaultWeight}/>
                    </div>
                </div>
                {resultModal}
            </div>
        );
    }
}

export default PerceptronInputScreen;