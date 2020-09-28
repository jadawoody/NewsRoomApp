import React, { useState } from "react";
import { Link } from "react-router-dom";
import OurLogo from "../images/OURLOGO$.png";
import axios from "axios";

function GetCalm(props) {
  console.log(props.adviceProp);

  let [newadvice, setNewAdvice] = useState("");

  const GetNewAdvice = () => {
    // console.log(props, props.adviceProp.advice);

    async function getData() {
      let res = await axios.get("https://api.adviceslip.com/advice");
      setNewAdvice(res.data.slip.advice);
    }

    getData();
  };
  // return <div>{props,adviceProp}</div>;

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
      <div className="calmContent">
        <article id="calmBox">
          <h4 id="calm">Get Inspiration</h4>
          <p id="calm">
            {props.quoteProp}
            <br />-{props.authorProp}
          </p>
          <br />
        </article>
        <article id="calmBox">
          <h4 id="calm">Get Advice</h4>
          <p id="calm">{props.adviceProp.advice}</p>

          <button id="adviceButton" onClick={GetNewAdvice}>
            Get New Advice
          </button>
          <p id="calm">{newadvice}</p>
        </article>
      </div>
    </div>
  );
}

export default GetCalm;
