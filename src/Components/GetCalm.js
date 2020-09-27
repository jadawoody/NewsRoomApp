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
      <ul className="navheadbar">
          <li><Link to={`/NewsPage`}>News</Link></li>
          <li><Link to={`/WeatherPage`}>Weather</Link></li>
          <li><Link to={`/SportsPage`}>Sports</Link></li>
          <li><Link to={`/CalmPage`}>Calming Corner</Link></li>
          <li><Link to={`/TechPage`}>Tech</Link></li>
          <li><Link to={`/CreatorPage`}>Creators</Link></li>
          </ul>
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
      <footer className="lilFooter">
          <p>Created by Rebecca Sell and Jada Woody</p>
          <p>Ironhack Class of Aug 2020</p>
        </footer>
    </div>
  );
}
export default GetCalm;
