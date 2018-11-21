import React, { Component } from 'react';
import '../CSS/App.css';
import FullBoard from './FullBoard';
import Numbers from './Numbers';


class Game extends Component {
    
    state={
        isInEditMode: false,
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

    setEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    };

    onListItemClick = (e) => {
        console.log(e.currentTarget.textContent);
        const squareIndex = this.state.squareIndex;
        const boardIndex = this.state.boardIndex;
        
        const itemClicked = e.currentTarget.textContent;
        const squares = this.state.squares.slice();
        console.log(squares[boardIndex][squareIndex]);
        squares[boardIndex][squareIndex] = itemClicked;

        this.setState({
            itemClicked: itemClicked,
            isInEditMode: !this.state.isInEditMode,
            squares: squares.concat([])
        })
    }
    
    handleClick(index, i) {
        //const squares = this.state.squares.slice();
        const boardIndex = parseInt(index-1, 10);
        const squareIndex = parseInt(i, 10);

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
                <FullBoard isInEditMode={this.state.isInEditMode} setEditMode={this.setEditMode} handleClick={(index, i)=>this.handleClick(index,i)} numbers={this.state.numbers} squares={this.state.squares}/>
                {this.state.isInEditMode?<Numbers numbers={this.state.numbers} onListItemClick={(e)=>this.onListItemClick(e)}/>:null}
            </div>
        </div>
        );
    }

}
 
export default Game;