import React from 'react';

function Square (props){
    const squares = props.squares;
    const boardID = props.boardIndex;
    const squareID = props.squareIndex;
    // console.log('boardID');
    // console.log(boardID);
    // console.log('squareID');
    // console.log(squareID);

        return(
            <div className="square" onClick={(e)=>{props.handleClick(), props.clickItem(e)}}>
                
            </div>
        );
}

export default Square;

// list.map((item, index) => {
//     return (
//       <div key={index}>
//         <ul >{item.value}</ul>
//        {
//         item.list.map((subitem, i) => {
//           return (
//              <ul ><li>{subitem.value}</li></ul>
//           )
//         })
//        }
//       </div>
//     )
//   }