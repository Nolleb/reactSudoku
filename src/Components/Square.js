import React from 'react';

function Square (props){
    return(
        <div className="square" onClick={(e)=>{props.handleClick(); props.clickItem(e)}}>
            {props.value}
        </div>
    );
}

export default Square;

