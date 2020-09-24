import React from 'react';
import '../GetNews.css';

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
        
            <h3>Get Your Daily Dose of News!</h3>
            {/* <li className="cinnaStick"><Link to={`NewsPage`}>Get News</Link></li> */}
            <p>{paper}</p>
            
        </div>
    );
}

//each article has : title, author, description, url

export default GetNews;