import React from 'react';
import {Link} from 'react-router-dom';
import { HOME_PAGE } from '../../utilities/paths';

const navigationBar = (props) => {
    return(
            <section className='hero is-light'>
                <div className='hero-body'>
                    <div className='container'>
                        <Link to={ HOME_PAGE }>
                            <h1 className='title'>Neural Works Neat</h1>
                        </Link>
                        <h2 className='subtitle'>{props.currentPage}</h2>
                    </div>
                </div>
            </section>
    );
};

export default navigationBar;