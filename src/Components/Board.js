import React from 'react';
import Square from './Square';
import EditSquare from './EditSquare';

class Board extends React.Component{
    renderSquare (index, i) {
     
        return (
          <EditSquare>{(clickItem)=><Square 
                handleClick={()=>this.props.handleClick(index, i)}                 
                value={this.props.squares[index-1][i]}
                clickItem={clickItem}         
            />}</EditSquare>
        )
    }

    render(){
        const index = this.props.index;
        return(
            <div className="board">
                <div className="board-row">
                    {this.renderSquare(index, 0)}
                    {this.renderSquare(index, 1)}
                    {this.renderSquare(index, 2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(index, 3)}
                    {this.renderSquare(index, 4)}
                    {this.renderSquare(index, 5)}
                    </div>
                <div className="board-row">
                    {this.renderSquare(index, 6)}
                    {this.renderSquare(index, 7)}
                    {this.renderSquare(index, 8)}
            </div>
        </div>
        );
    }
}


export default Board;