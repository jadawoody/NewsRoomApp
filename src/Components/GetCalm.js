import React from "react";

function GetCalm(props) {
  function GetNewAdvice() {
    return <div>{props.adviceProp}</div>;
  }
  console.log(props.adviceProp.advice);
  return (
    <div>
      <h3>Get Your Daily Dose of News!</h3>
      {/* {props.adviceProp.advice} */}
      {/* <li className="cinnaStick"><Link to={`NewsPage`}>Get News</Link></li> */}
      <button onClick={GetNewAdvice()}>Advice!</button>
    </div>
  );
}

export default GetCalm;
