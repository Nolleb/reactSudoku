import React, { Component } from 'react';
import '../CSS/App.css';
import FullBoard from './FullBoard';
import Numbers from './Numbers';


class Game extends Component {
    
    state={
        squares: [
            [Array(9).fill(null)],
            [Array(9).fill(null)],
            [Array(9).fill(null)],
            [Array(9).fill(null)],
            [Array(9).fill(null)],
            [Array(9).fill(null)],
            [Array(9).fill(null)],
            [Array(9).fill(null)],
            [Array(9).fill(null)]
        ],
        numbers: [1,2,3,4,5,6,7,8,9],
        itemClicked:"",
        boardIndex:"",
        squareIndex:""
    }

    onListItemClick = (e) => {
        console.log(e.currentTarget.textContent);
        const squareIndex = parseInt(this.state.squareIndex,10);
        const boardIndex = parseInt(this.state.boardIndex, 10);

        // console.log('boardIndex');
        // console.log(boardIndex);
        // console.log('squareIndex');
        // console.log(squareIndex);

        const itemClicked = e.currentTarget.textContent;
        const squares = this.state.squares.slice();
        // console.log("array")
        // console.log(squares[boardIndex][squareIndex]);
        squares[boardIndex][squareIndex] = itemClicked;

        this.setState({
            itemClicked: itemClicked,
            isInEditMode: !this.state.isInEditMode,
            squares: squares
        })
        //console.log(squares);
    }
    
    handleClick=(index, i)=> {
        //const squares = this.state.squares.slice();
        const boardIndex = parseInt(index-1, 10);
        const squareIndex = parseInt(i, 10);
        // console.log('boardIndex');
        // console.log(boardIndex);
        // console.log('squareIndex');
        // console.log(squareIndex);
        this.setState({
            boardIndex: boardIndex,
            squareIndex: squareIndex
        })
    }

    render() {
        
        return (
        <div className="wrapper">
            <div className="header">            
            </div>
            <div className="container">
                <FullBoard  
                    handleClick={(index, i)=>this.handleClick(index,i)} 
                    numbers={this.state.numbers} 
                    squares={this.state.squares} 
                    boardIndex={this.state.boardIndex} 
                    squareIndex={this.state.squareIndex}
                />
                <Numbers numbers={this.state.numbers} onListItemClick={(e)=>this.onListItemClick(e)}/>
            </div>
        </div>
        );
    }

}
 
export default Game;