import React from "react";
import {Link} from 'react-router-dom';
import OurLogo from '../images/OURLOGO$.png';

function GetCalm(props) {
     console.log(props)
     
    return (
        <div>
        <header className="logoAllPage">
    <Link to={`/HomePage`}><img src={OurLogo} alt="our news logo" className="ourlogo" ></img></Link>
    </header>
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
