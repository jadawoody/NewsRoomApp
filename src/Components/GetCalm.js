import React, { useState } from "react";
import { Link } from "react-router-dom";
import OurLogo from "../images/OURLOGO$.png";
import axios from "axios";

function GetCalm(props) {
  console.log(props);
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
      <header className="logoAllPage">
        <Link to={`/`}>
          <img src={OurLogo} alt="our news logo" className="ourlogo"></img>
        </Link>
      </header>
      <h3>Calming Corner</h3>
      <div className="insQuote"></div>
      <p>
        {props.quoteProp}
        <br />-{props.authorProp}
      </p>
      <br />
      <p>{props.adviceProp.advice}</p>
      <div className="advicebox">
        <button onClick={GetNewAdvice}></button>
        <p>{advice}</p>
        {/* <p>{words}</p> */}
      </div>
    </div>
  );
}
export default GetCalm;
