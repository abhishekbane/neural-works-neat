import React from 'react';

const addOrRemoveButton = (props) => {
    return(
        <div className='buttons has-addons'>
            <button className='button' disabled={props.disableRemove} dangerouslySetInnerHTML={{__html: props.removeText}} onClick={props.removeClicked}>
                
            </button>
            <button className='button' disabled={props.disableAdd} dangerouslySetInnerHTML={{__html: props.addText}} onClick={props.addClicked}>
                
            </button>
        </div>
    );
}

export default addOrRemoveButton;