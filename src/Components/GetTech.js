import React from "react";
// import axios from 'axios';

function GetTech(props) {
   console.log(props);
  let techNews = props.techProp.map((eachTecharticle) => {
    // console.log(eachTecharticle)
    return (
      <div>
        <ul className="orange">
          <img
            className="treat"
            src={eachTecharticle.urlToImage}
            alt="articleImg"
          />
          <li className="pumpkin">
            <a href={eachTecharticle.url}>{eachTecharticle.title}</a>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h3>Get Your Daily Dose of News!</h3>
      {/* <li className="cinnaStick"><Link to={`NewsPage`}>Get News</Link></li> */}
      <p>{techNews}</p>
    </div>
  );
}

export default GetTech;
