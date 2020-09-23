import React from "react";

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
      <h3>Catch up on Sports News!</h3>
      {football}
    </div>
  );
}

export default GetSports;
