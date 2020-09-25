import React from "react";
import { Link } from "react-router-dom";
import OurLogo from '../images/OURLOGO$.png'
import News from "../images/newstrans.png";
import Sun from "../images/suntrans.png";
import Sports from "../images/sportstrans.png";
import Calm from "../images/relaxtrans.png";
import Tech from "../images/techtrans.png";
import Creators from "../images/creatorstrans.png";
function Home(props) {
  return (
    <div className="homeContainer">
      <div className="blackCat">
        <header className="homeHeader">
          <h3 className="homeLine1">Welcome to NewsRoom!</h3>
          <p className="homeLine2">The Nexus of News</p>
        </header>
      </div>
      <div className="black">
        <nav className="ghost">
          <img src={OurLogo} alt="our news logo" className="homelogo"></img>
          <div className="row1">
            <div className="grid-item">
              <img className="logo" src={News}></img>
              <Link to={`/NewsPage`}>Top News Headlines</Link>
            </div>
            <div className="grid-item">
              <img className="logo" src={Sun}></img>
              <Link to={`/WeatherPage`}>Today's Weather</Link>
            </div>
            <div className="grid-item">
              <img className="logo" src={Sports}></img>
              <Link to={`/SportsPage`}>Sports Updates</Link>
            </div>
          </div>
          <div className="row2">
            <div className="grid-item">
              <img className="logo" src={Calm}></img>
              <Link to={`/CalmPage`}>Calming Corner</Link>
            </div>
            <div className="grid-item">
              <img className="logo" src={Tech}></img>
              <Link to={`/TechPage`}>Tech Updates</Link>
            </div>
            <div className="grid-item">
              <img className="logo" src={Creators}></img>
              <Link to={`/CreatorPage`}>Meet the Creators</Link>
            </div>
          </div>
        </nav>
        <body></body>
        <footer className="lilFooter">
          <p>Created by Rebecca Sell and Jada Woody</p>
          <p>Ironhack Class of Aug 2020</p>
        </footer>
      </div>
    </div>
  );
}
export default Home;
