import axios from "axios";
import React, { useState, useEffect } from "react";
function GetCalm(props) {
  // console.log(props);
  let [advice, setAdvice] = useState("");

  const GetNewAdvice = () => {
    // console.log(props, props.adviceProp.advice);

    async function getData() {
      let res = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(res.data.slip.advice);
    }
    getData();

    // return <div>{props,adviceProp}</div>;
  };

  return (
    <div>
      <h3>Calming Corner</h3>
      <p>
        {props.quoteProp}
        <br />-{props.authorProp}
      </p>
      <br />
      <p>{props.adviceProp.advice}</p>
      <button onClick={GetNewAdvice}></button>
      <p>{advice}</p>
    </div>
  );
}
export default GetCalm;
