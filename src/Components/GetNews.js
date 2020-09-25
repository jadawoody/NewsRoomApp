import React from 'react';
import {Link} from 'react-router-dom';
import OurLogo from '../images/OURLOGO$.png'
function GetNews(props) {
let paper = props.newsDataProp.map((eacharticle) => {
    // console.log(paper)
    // console.log(eacharticle)
    return (
        <div>
            <ul className="orange">
            <img className="treat" src={eacharticle.urlToImage} alt="articleImg"/>
                <li className="pumpkin">
                    <a href={eacharticle.url}>{eacharticle.title}</a>
                </li>
            </ul>
            
        </div>
    )
})


    return (
        <div>
        <header className="logoAllPage">
    <Link to={`/HomePage`}><img src={OurLogo} alt="our news logo" className="ourlogo" ></img></Link>
    </header>
            <h3>Get Your Daily Dose of News!</h3>
            <p>{paper}</p>
            
        </div>
    );
}

//each article has : title, author, description, url

export default GetNews;