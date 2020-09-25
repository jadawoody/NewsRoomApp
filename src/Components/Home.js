import React from "react";
import { Link } from "react-router-dom";
import OurLogo from "../images/OFFISHnewsroomLogo3.png";
function Home(props) {
  return (
    <div className="black">
      <nav className="ghost">
        <ul className="spooky">
          <img src={OurLogo} alt="our news logo" className="ourlogo"></img>
          <li className="trick">
            <Link to={`/NewsPage`}>Get News</Link>
          </li>
          <li className="trick">
            <Link to={`/WeatherPage`}>Get Yo Weather</Link>
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
        </ul>
      </nav>
      <body></body>
    </div>
  );
}
export default Home;
