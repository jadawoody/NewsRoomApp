import React from 'react';
// import axios from 'axios';

function GetFinance(props) {

    let stock = props.financeProp.map((eachstock) => {
        // console.log(eachstock)
        return (
            <div>
              <ul className="orange">
                {/* <img className="treat" src={eacharticle.urlToImage} alt="articleImg"/> */}
                  <li className="pumpkin">
                    <a href={eachstock.url}>{eachstock.title}</a>
                  </li>
              </ul>
                
            </div>
        )
    })

    return (
        <div>
            <h3>Finances</h3>
            <p>{stock}</p>
        </div>
    );
}

export default GetFinance;