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
        numbers: [1,2,3,4,5,6,7,8,9],
        itemClicked:"",
        boardIndex:"",
        squareIndex:"",
        sudokuIndex:""
    }

    componentDidMount = () => {

        const randomSudoku = this.getRandomSudokuName(sudokus);
        const squares = this.getAllSquares();

        const newArray = sudokus[randomSudoku].map(function(arr) {
            return arr.slice();
        });

        this.setState((prevState, props)=>{
            return ({squares: newArray})
        },
        ()=> {
            const squaresNotAllowed = squares.filter(el=>{
                return el.hasChildNodes()
        })
            squares.map(el=>el.classList.remove('not-allowed'));
            squaresNotAllowed.map(el=>{
                el.classList.add('not-allowed');
                return el;
            });    
        });

    }

    getRandomSudokuName = (sudokus) => {
        const randomNb = Math.floor(Math.random() * Object.keys(sudokus).length) + 1;
        const randomSudokuName = "sudoku" + randomNb;
        this.setState({
            sudokuIndex: randomSudokuName
        })
        return randomSudokuName;
    }

    loadNewGame = () => {

        const randomSudoku = this.getRandomSudokuName(sudokus);
        const squares = this.getAllSquares();

        const newArray = sudokus[randomSudoku].map(function(arr) {
            return arr.slice();
        });

        this.setState((prevState, props)=>{
            return ({squares: newArray})
        },
        ()=> {
            const squaresNotAllowed = squares.filter(el=>{
                return el.hasChildNodes()
            })
            squares.map(el=>el.classList.remove('not-allowed', 'error'));
            squaresNotAllowed.map(el=>{
            el.classList.add('not-allowed');
            return el;
            });
        });
    }

    resetGame = () => {
        const squares = this.getAllSquares();
        const sudokuIndex = this.state.sudokuIndex;
        const newArray = sudokus[sudokuIndex].map(function(arr) {
            return arr.slice();
        });
        squares.map(el=>el.classList.remove('error'));
        this.setState({
            squares: newArray
        })
    }

    onListItemClick = (e) => {
        
        const squareIndex = parseInt(this.state.squareIndex,10);
        const boardIndex = parseInt(this.state.boardIndex, 10);

        const squaresArray = this.getAllSquares();
        const splitArray = this.getSquaresIntoArray();

        const itemClicked = parseInt(e.currentTarget.textContent, 10);
        const squares = this.state.squares.slice(); 

        squaresArray.map(el=>{
            if(el.classList.contains('active')){ 
                squares[boardIndex][squareIndex] = itemClicked;
            }
            return itemClicked;
        });
        
        splitArray[boardIndex].map((el, index)=>{
       
            if(index !== squareIndex && squares[boardIndex][index] === itemClicked){
                console.log('match');
                splitArray[boardIndex][squareIndex].classList.add('error');
            }  
            return itemClicked;
        });

        this.setState({
            itemClicked: itemClicked,
            squares: squares
        });
        this.removeActiveFromSquare();
    }
    
    handleClick=(index, i)=> {
        const squares = this.getAllSquares();
        squares.map(el=>el.classList.remove('error'));
        const boardIndex = parseInt(index-1, 10);
        const squareIndex = parseInt(i, 10);

        this.setState({
            boardIndex: boardIndex,
            squareIndex: squareIndex
        });
    }

    removeActiveFromSquare = () => {
        const squaresArray = this.getAllSquares();
        squaresArray.map(el=>el.classList.remove('active'));
    }

    getAllSquares = () => {
        const allSquares = document.querySelectorAll('.square');
        const squaresArray = Array.from(allSquares);
        return squaresArray;
    }

    getSquaresIntoArray = () => {
        const squaresArray = this.getAllSquares();
        return splitArray(squaresArray, 9);
    }

    render() {
        
        return (
        <div className="wrapper">
            <Header loadNewGame={this.loadNewGame} resetGame={this.resetGame}/>
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

const splitArray = function (arr, size) {

    let arr2 = arr.slice(0);
    let arrays = [];
  
    while (arr2.length > 0) {
        arrays.push(arr2.splice(0, size));
    }
  
    return arrays;
}