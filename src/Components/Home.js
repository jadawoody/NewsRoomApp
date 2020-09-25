import React from "react";
import { Link } from "react-router-dom";
import OurLogo from '../images/OFFISHnewsroomLogo3.png'

function Home(props) {
  return (
    
    
    <div className="homeContainer">
      <div className="blackCat">
        <header >
        <h3 className="homeLine1">Welcome to NewsRoom!</h3>
        <p className="homeLine2">The Nexus of News</p>
        </header>
      </div>
      <div className="black">
      <nav className="ghost">

        <ul className="spooky">

        <img src={OurLogo} alt="our news logo" className="ourlogo" ></img>
          
          <li className="trick">
            <Link to={`/NewsPage`}>Top News Headlines</Link>
          </li>
          <li className="trick">
            <Link to={`/WeatherPage`}>Today's Weather</Link>
          </li>
          <li className="trick">
            <Link to={`/SportsPage`}>Sports Updates</Link>
          </li>
          <li className="trick">
            <Link to={`/CalmPage`}>Calming Corner</Link>
          </li>
          <li className="trick">
            <Link to={`/TechPage`}>Tech Updates</Link>
          </li>
          <li className="trick"><Link to={`/CreatorPage`}>Meet the Creators</Link></li>
        </ul>
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
