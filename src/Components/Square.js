import React from 'react';

function Square (props){
    const squares = props.squares;
        return(
            <div className="square" onClick={()=>{props.setEditMode(); props.handleClick()}}>
               {squares.map((item, index)=>{
                   <span key={index}>
                        {item.squares.map(subitem=>subitem.value)}
                   </span>
               })}
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