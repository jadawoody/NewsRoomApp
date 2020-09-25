import React from 'react';
import OurLogo from '../images/OURLOGO$.png';
import {Link} from 'react-router-dom';

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
                <img></img>
                <p id="bio">Cupcake ipsum dolor sit amet cake. Chupa chups cupcake pie toffee gingerbread biscuit carrot cake candy canes. Candy canes tart croissant. Sweet I love sesame snaps. Icing I love sugar plum gummies pudding macaroon tootsie roll. Gummi bears caramels sugar plum pastry gummies biscuit danish. Lollipop topping chocolate bar tootsie roll jelly croissant danish.</p>
                <Link>Visit Rebecca's LinkedIn Profile</Link>
            </article>
            <article>
                <p>Jada Woody</p>
                <img></img>
                <p id="bio">Cupcake ipsum dolor sit amet cake. Chupa chups cupcake pie toffee gingerbread biscuit carrot cake candy canes. Candy canes tart croissant. Sweet I love sesame snaps. Icing I love sugar plum gummies pudding macaroon tootsie roll. Gummi bears caramels sugar plum pastry gummies biscuit danish. Lollipop topping chocolate bar tootsie roll jelly croissant danish.</p>
                <a href="www.linkedin.com/in/jada-woody">Visit Jada's LinkedIn Profile</a>
                {/* this a tag is changing the url when clicked, but not actually rendering my profile...do I need a function that will be called in Switch/Route in App.js?? */}
            </article>
        </div>
      </div>
    );
}

export default Creator;