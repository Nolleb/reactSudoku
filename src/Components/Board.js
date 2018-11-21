import React from 'react';
import Square from './Square';

class Board extends React.Component{
    renderSquare (index, i) {
        return (
          <Square 
                 handleClick={()=>this.props.handleClick(index, i)}
                 isInEditMode={this.props.isInEditMode}
                 setEditMode={this.props.setEditMode}
                 squares={this.props.squares}
                 />
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