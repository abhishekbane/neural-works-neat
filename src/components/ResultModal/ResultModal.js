import React from 'react';

import ResultTables from '../ResultTables/ResultTables';
import Modal from '../UI/Modal/Modal';

const resultModal = ( props ) => {
    const networkOutputModal = props.showResults
            ? <Modal closeModal={props.closeModal} modalHeader="Results">
                { props.children }
                { 
                    props.networkOutput.length>0 
                        ? <ResultTables tableCollection={ props.networkOutput } />
                        : 'Loading...'
                }
            </Modal> 
            : null;

    return (
        networkOutputModal
    );
};

export default resultModal;