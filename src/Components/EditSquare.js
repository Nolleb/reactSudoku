import React, {Fragment} from 'react';

class EditSquare extends React.Component {
    clickItem = (e) => {
        const squares = document.querySelectorAll('.square');
        const squaresArray = Array.from(squares);

        if(e.currentTarget.classList.contains('active')){
            e.currentTarget.classList.remove('active');
        }else{
            squaresArray.map(el=>el.classList.remove('active'));
            e.currentTarget.classList.add('active');
        }
    };
    render(){
        return(
            <Fragment>
                {this.props.children(this.clickItem)}
            </Fragment>
        );
    }
}

export default EditSquare;