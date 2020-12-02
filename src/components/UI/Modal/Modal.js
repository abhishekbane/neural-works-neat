import React from 'react';

const modal = (props) => {
    return(
            <div className="my-modal-background">
                <div className="my-modal">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{props.modalHeader}</p>
                        <button onClick={props.closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        {props.children}                        
                    </section>
                </div>
            </div>
    );
};

export default modal;