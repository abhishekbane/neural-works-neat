import React from 'react';

import ScreenCard from './ScreenCard/ScreenCard';

const screenCards = (props) => {
    let screenCards = [];

    for( let network of props.networks){
        
        screenCards.push(
            <div key={network.name}>
                    <ScreenCard 
                        networkName={network.name}
                        networkInfo={network.info}
                        path={network.path}/>
            </div>
        );

    }

    return(
        <div className="my-screencards-grid-container">
                <div className="my-screencards-grid">
                    { screenCards }
                </div>
        </div>
    );
}

export default screenCards;