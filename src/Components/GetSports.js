import React from "react";
import {Link} from 'react-router-dom';
import OurLogo from '../images/OURLOGO$.png'
function GetSports(props) {
  let football = props.sportsDataProp.map((eachsport) => {
    return (
      
      <div>
        <ul className="orange">
          <img className="treat" src={eachsport.urlToImage} alt="articleImg" />
          <li className="pumpkin">
            <a href={eachsport.url}>{eachsport.title}</a>
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div>
    <header className="logoAllPage">
    <Link to={`/HomePage`}><img src={OurLogo} alt="our news logo" className="ourlogo" ></img></Link>
    </header>
      <h3>Catch up on Sports News!</h3>
      {football}
    </div>
  );
}

export default GetSports;
