import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div className="header u-margin-bottom-medium">
                <h1 className="heading-primary u-uppercase u-margin-bottom-medium">Sudoku</h1>
                <div className="header__control">
                    <button className="btn u-margin-right-small" onClick={this.props.loadNewGame}>New sudoku</button>
                    <button className="btn">Reset sudoku</button>                
                </div>
            </div>
        );
    }
}

export default Header;