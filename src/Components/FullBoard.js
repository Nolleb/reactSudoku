import React from 'react';
import Board from './Board';


class FullBoard extends React.Component{
    
    render(){
        const numbers = this.props.numbers;
    
        return(
            <div className="full-board">
                {numbers.map(nb=>
                    <Board key={nb} index={nb} isInEditMode={this.props.isInEditMode} setEditMode={this.props.setEditMode} handleClick={this.props.handleClick} squares={this.props.squares}>
                    </Board>
                )}
            </div>
        );
    }
}

export default FullBoard;