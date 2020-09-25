import React from "react";

function GetCalm(props) {
     console.log(props)
     
    return (
        <div>
            <h3>Calming Corner</h3>
            <p>
                {props.quoteProp}
                <br/>
                -{props.authorProp}
                </p>
            <br/>
            <p>{props.adviceProp.advice}</p>
            {/* <p>{words}</p> */}
        </div>
    );

//   function GetNewAdvice() {
//     return <div>{props.adviceProp}</div>;
//   }
    //   <button onClick={GetNewAdvice()}>Advice!</button>
   
}

export default GetCalm;
