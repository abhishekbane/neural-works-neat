import React, {Component} from 'react';

import ScreenCards from '../../components/ScreenCards/ScreenCards';
import { HEBB_INPUT_PAGE, PERCEPTRON_INPUT_PAGE, ADALINE_INPUT_PAGE, BACK_PROPOGATION_INPUT_PAGE } from '../../utilities/paths';

class HomeScreen extends Component {
    state={
        networks:[
            {
                name: 'Hebb',
                info: 'Stated by Donald Hebb in 1949. Based on the Hebbian theory. Often summarized as "Cells that fire together wire together".',
                path: HEBB_INPUT_PAGE
            },
            {
                name: 'Perceptron',
                info: 'Invented by Frank Rosenblatt in 1958 at the Cornell Aeronautical Laboratory, funded by the US Office of Naval Research.',
                path: PERCEPTRON_INPUT_PAGE
            },
            {
                name: '[Coming soon] Adaline',
                info: 'Developed in 1960 by Prof.Bernard Widrow and his graduate student Ted Hoff at Stanford University.',
                path: ADALINE_INPUT_PAGE
            },
            {
                name: '[Coming soon] Back Propagation',
                info: 'Derived in the context of control theory by Henry J. Kelley in 1960, and by Arthur E. Bryson in 1961. ',
                path: BACK_PROPOGATION_INPUT_PAGE
            }
        ]
    }
    render(){
        
        return(
                <ScreenCards networks={this.state.networks} />
        );
    }
}

export default HomeScreen;