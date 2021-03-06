import React from "react";
import { Link } from "react-router-dom";
import OurLogo from "../images/OURLOGO$.png";
function GetNews(props) {
  let paper = props.newsDataProp.map((eacharticle) => {
    // console.log(paper)
    // console.log(eacharticle)
    return (
      <div>
        <ul className="orange">
          <img
            className="treat"
            src={eacharticle.urlToImage ? eacharticle.urlToImage : OurLogo}
            alt="articleImg"
          />
          <li className="pumpkin">
            <a href={eacharticle.url}>{eacharticle.title}</a>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div>
      <header className="logoAllPage">
        <ul className="navheadbar">
          <li>
            <Link to={`/NewsPage`}>News</Link>
          </li>
          <li>
            <Link to={`/WeatherPage`}>Weather</Link>
          </li>
          <li>
            <Link to={`/SportsPage`}>Sports</Link>
          </li>
          <li>
            <Link to={`/CalmPage`}>Calming Corner</Link>
          </li>
          <li>
            <Link to={`/TechPage`}>Tech</Link>
          </li>
          <li>
            <Link to={`/CreatorPage`}>Creators</Link>
          </li>
        </ul>
        <Link to={`/`}>
          <img src={OurLogo} alt="our news logo" className="ourlogo"></img>
        </Link>
      </header>
      <h3>Get Your Daily Dose of News!</h3>
      <p>{paper}</p>
      <footer className="lilFooter">
        <p>Created by Rebecca Sell and Jada Woody</p>
        <p>Ironhack Class of Aug 2020</p>
      </footer>
    </div>
  );
}

//each article has : title, author, description, url

export default GetNews;
