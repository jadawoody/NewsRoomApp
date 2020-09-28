import React from "react";
import OurLogo from "../images/OURLOGO$.png";
import { Link } from "react-router-dom";
import JadaPic from "../images/headshot jw copy.jpeg";
import RebeccaPic from "../images/rebeccaHeadshot.jpg";
function Creator(props) {
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
      <h4>Meet the Creators</h4>
      <p id="discript">A Couple of Perfect 10's</p>
      <div className="divOfCreators">
        <article className="creatorArticle">
          <p>Rebecca Sell</p>
          <img src={RebeccaPic} alt="photoofrebecca" id="rebeccaPic"></img>
          <p id="bio">
            Rebecca Sell is a Full-Stack Developer based in Miami, Florida. As of October 2020, Rebecca has been a graduate alum of Ironhack Miami! Rebecca plans to use her skills learned at Ironhack to launch a career in web development! Rebecca is intersted in projects including the following languages...
            To get in touch with Rebecca and to learn more about her professional experience, visit her LinkedIn page, linked below! 
          </p>
          <a
            href="https://www.linkedin.com/in/rebecca-sell-/"
            className="profileLink"
          >
            Visit Rebecca's LinkedIn Profile
          </a>
        </article>
        <article className="creatorArticle">
          <p>Jada Woody</p>
          <img src={JadaPic} alt="photoofjada" id="jadaPic"></img>
          <p id="bio">
            Jada Woody is a Full-Stack Developer based in Detroit, Michigan. As of October 2020, she has been a graduate alum of Ironhack Miami. Jada plans to use the skills learned to develop a comprehensive website and software engineering department at Encompass HealthCare and to later launch a career in web development! Jada is interested in working more with Node.js and React. For more information on her experience or to get in touch with Jada, visit her LinkedIn profile, link below!
          </p>
          <a
            href="https://www.linkedin.com/in/jada-woody"
            className="profileLink"
          >
            Visit Jada's LinkedIn Profile
          </a>
        </article>
      </div>
      <footer className="lilFooter">
          <p>Created by Rebecca Sell and Jada Woody</p>
          <p>Ironhack Class of Aug 2020</p>
        </footer>
    </div>
  );
}

export default Creator;
