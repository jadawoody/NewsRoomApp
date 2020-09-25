import React from 'react';
import OurLogo from '../images/OURLOGO$.png';
import {Link} from 'react-router-dom';
import JadaPic from '../images/headshot jw copy.jpeg'
function Creator(props) {
    return (
      <div>
        <header className="logoAllPage">
        <Link to={`/`}><img src={OurLogo} alt="our news logo" className="ourlogo" ></img></Link>
        </header>
        <h4>Meet the Creators</h4>
        <p>Rebecca Sell and Jada Woody</p>
        <div className="divOfCreators">
            <article>
                <p>Rebecca Sell</p>
                {/* <img src={RebeccaPic} alt="photoofrebecca" id="rebeccaPic"></img> */}
                <p id="bio">Cupcake ipsum dolor sit amet cake. Chupa chups cupcake pie toffee gingerbread biscuit carrot cake candy canes. Candy canes tart croissant. Sweet I love sesame snaps. Icing I love sugar plum gummies pudding macaroon tootsie roll. Gummi bears caramels sugar plum pastry gummies biscuit danish. Lollipop topping chocolate bar tootsie roll jelly croissant danish.</p>
                <a href="https://www.linkedin.com/in/rebecca-sell-/" className="profileLink">Visit Rebecca's LinkedIn Profile</a>
            </article>
            <article>
                <p>Jada Woody</p>
                <img src={JadaPic} alt="photoofjada" id="jadaPic"></img>
                <p id="bio">Cupcake ipsum dolor sit amet cake. Chupa chups cupcake pie toffee gingerbread biscuit carrot cake candy canes. Candy canes tart croissant. Sweet I love sesame snaps. Icing I love sugar plum gummies pudding macaroon tootsie roll. Gummi bears caramels sugar plum pastry gummies biscuit danish. Lollipop topping chocolate bar tootsie roll jelly croissant danish.</p>
                <a href="https://www.linkedin.com/in/jada-woody" className="profileLink">Visit Jada's LinkedIn Profile</a>
            </article>
        </div>
      </div>
    );
}

export default Creator;