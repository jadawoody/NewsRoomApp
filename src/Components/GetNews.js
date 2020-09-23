import React from 'react';
import {Link} from 'react-router-dom';
import '../GetNews.css';

function GetNews(props) {
let paper = props.newsDataProp.map((eacharticle) => {
    // console.log(paper)
    return (
        <div>
            <ul>
                <li className="pumpkin">
                    {eacharticle.title}
                </li>
            </ul>
            
        </div>
    )
})
console.log(props)

    return (
        <div>
        
            <h3>Get Your Daily Dose of News!</h3>
            {/* <li className="cinnaStick"><Link to={`NewsPage`}>Get News</Link></li> */}
            {paper}
            
        </div>
    );
}

//each article has : title, author, description, url

export default GetNews;