import React from 'react';

function GetCalm(props) {
     console.log(props)
     
// let words = props.quoteProp.map((eachquote) => {
//     console.log(eachquote)
    // return (
    //     <div>
    //       <ul className="orange">
    //         <li className="pumpkin">
    //           <Link>{eachquote?.content}</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   )
// }) 
    return (
        <div>
            <h3>Calming Corner</h3>
            {props.quoteProp}
            <br/>
            -{props.authorProp}
            {/* <p>{words}</p> */}
        </div>
    );
}

export default GetCalm;