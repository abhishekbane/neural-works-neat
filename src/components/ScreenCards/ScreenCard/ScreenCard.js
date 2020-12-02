import React from 'react';
import {Link} from 'react-router-dom';

const screenCard = (props) => {
    
    return(
        <Link to={props.path}>
            <div className='my-card'>
                <p className='title is-5'>{props.networkName} network</p>
                <p className='has-text-grey'>{props.networkInfo}</p>
            </div>
        </Link>
    );
};

export default screenCard;