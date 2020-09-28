import React from "react";
import { Link } from "react-router-dom";
import OurLogo from "../images/OURLOGO$.png";
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
              <Link to={`/NewsPage`}>
                <img className="logo" src={News} />
              </Link>
              {/* <br/> */}
              <Link to={`/NewsPage`}><span className="txt">News Headlines</span></Link>
            </div>

            <div className="grid-item">
              <Link to={`/WeatherPage`}>
                {" "}
                <img className="logo" src={Sun} />
              </Link>
              {/* <br/> */}
              <Link to={`/WeatherPage`}><span className="txt">Today's Weather</span></Link>
            </div>

            <div className="grid-item">
              <Link to={`/SportsPage`}>
                {" "}
                <img className="logo" src={Sports} />
              </Link>
              {/* <br/> */}
              <Link to={`/SportsPage`}><span className="txt">Sports Updates</span></Link>
            </div>
          </div>
          <div className="row2">
            <div className="grid-item">
              <Link to={`/CalmPage`}>
                <img className="logo" src={Calm} />
              </Link>
              {/* <br/> */}
              <Link to={`/CalmPage`}><span className="txt">Calming Corner</span></Link>
            </div>
            <div className="grid-item">
              <Link to={`/TechPage`}>
                <img className="logo" src={Tech} />
              </Link>
              {/* <br/> */}
              <Link to={`/TechPage`}><span className="txt">Tech Updates</span></Link>
            </div>
            <div className="grid-item">
              <Link to={`/CreatorPage`}>
                <img className="logo" src={Creators} />
              </Link>
              {/* <br/> */}
              <Link to={`/CreatorPage`}><span id="ctr" className="txt">Meet the Creators</span></Link>
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
