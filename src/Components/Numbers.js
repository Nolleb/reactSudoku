import React from 'react';

class Numbers extends React.Component {

    render(){
        const numbers = this.props.numbers;
        return (
            <div className="container__numbers">
                <h3 className="heading-tertiary">Choose number:</h3>
                <div className="numbers">
                    <ul className="numbers__list">
                        {numbers.map(nb=>
                            <li key={nb} className="numbers__item" onClick={(e)=>this.props.onListItemClick(e)}><button className="btn">{nb}</button></li>
                        )}
                    </ul>
                </div>
            </div>
          )
    }
    
}

export default Numbers;