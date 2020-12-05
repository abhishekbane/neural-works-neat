import React, {Component} from 'react';

import OperationalInputTable from '../OperationalInputTable/OperationalInputTable';
import SubmitNetworkDetails from '../../components/SubmitNetworkDetails/SubmitNetworkDetails';
import TextBoxWithRangeInput from '../../components/TextBoxWithRangeInput/TextBoxWithRangeInput';
import ResultModal from '../../components/ResultModal/ResultModal';

class PerceptronInputScreen extends Component {

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
        showOutput: false,
        networkOutput: [],
        isRecurring: false
    }

    getInputTable = (table) => {
        const combinedTable = {...this.state.table, ...table}
        this.setState({
            table: combinedTable
        });
    }

    getNetworkProperties = (data) => {
        const networkOutput = data.tables.map((table) => {return {...this.state.table , ...table}});
        const isRecurring = data.isRecurring;
        this.setState(
            {
                networkOutput: networkOutput,
                isRecurring: isRecurring
            }
        );
    }

    getDefaultWeight = (weightValue) => {
        this.setState({
            defaultWeight: weightValue
        });
    }

    closeModal = () => {
        this.setState({
            showOutput: false
        });
    }

    getAlpha = (alphaValue) => {
        this.setState({
            alpha: alphaValue
        });
    }

    getTheta = (thetaValue) => {
        this.setState({
            theta: thetaValue
        });
    }

    render(){
        const recurring = this.state.isRecurring ? <div><p>Showing top 10 epochs as the result is recurring...</p><br/></div> : null;

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
                            onClick={ () => {
                                this.setState({
                                    showOutput: true
                                });
                            } }
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
                <ResultModal closeModal={ this.closeModal } networkOutput={ this.state.networkOutput } showResults={ this.state.showOutput }>{ recurring }</ResultModal> 
            </div>
        );
    }
}

export default PerceptronInputScreen;