import React, { Component } from 'react';
import '../CSS/App.css';
import FullBoard from './FullBoard';
import Numbers from './Numbers';
import Header from './Header';
import sudokus from '../sudokus';

class Game extends Component {
    
    state={
        squares: [
            Array(9).fill(null),
            Array(9).fill(null),
            Array(9).fill(null),
            Array(9).fill(null),
            Array(9).fill(null),
            Array(9).fill(null),
            Array(9).fill(null),
            Array(9).fill(null),
            Array(9).fill(null)
        ],
        sudokus:"",
        numbers: [1,2,3,4,5,6,7,8,9],
        itemClicked:"",
        boardIndex:"",
        squareIndex:""
    }
    getRandomSudokuName = (sudokus) => {
        const randomNb = Math.floor(Math.random() * Object.keys(sudokus).length) + 1;
        const randomSudokuName = "sudoku" + randomNb;
        return randomSudokuName;
    }
    loadNewGame = () => {
        const randomSudoku = this.getRandomSudokuName(sudokus);
        this.setState({
            squares: sudokus[randomSudoku]
        })
    }

    onListItemClick = (e) => {
        
        const squareIndex = parseInt(this.state.squareIndex,10);
        const boardIndex = parseInt(this.state.boardIndex, 10);

        const sq = document.querySelectorAll('.square');
        const squaresArray = Array.from(sq);
   
        const itemClicked = parseInt(e.currentTarget.textContent, 10);
        const squares = this.state.squares.slice();

        squaresArray.map(el=>{
            if(el.classList.contains('active')){
                squares[boardIndex][squareIndex] = itemClicked;
            }
            return itemClicked;
        })

        this.setState({
            itemClicked: itemClicked,
            squares: squares
        })
        this.removeActiveFromSquare();
    }
    
    handleClick=(index, i)=> {

        const boardIndex = parseInt(index-1, 10);
        const squareIndex = parseInt(i, 10);

        this.setState({
            boardIndex: boardIndex,
            squareIndex: squareIndex
        })
    }

    removeActiveFromSquare = () => {
        const squares = document.querySelectorAll('.square');
        const squaresArray = Array.from(squares);
        squaresArray.map(el=>el.classList.remove('active'));
    }

    render() {
        
        return (
        <div className="wrapper">
            <Header loadNewGame={this.loadNewGame}/>
            <div className="container">
                <FullBoard  
                    handleClick={(index, i)=>this.handleClick(index,i)} 
                    numbers={this.state.numbers} 
                    squares={this.state.squares} 
                    itemClicked={this.state.itemClicked}
                />
                <Numbers numbers={this.state.numbers} onListItemClick={(e)=>this.onListItemClick(e)}/>
            </div>
        </div>
        );
    }

}
 
export default Game;