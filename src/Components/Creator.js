import React from 'react';
import OurLogo from '../images/OURLOGO$.png';
import {Link} from 'react-router-dom';

function Creator(props) {
    return (
      <div>
        <header className="logoAllPage">
        <Link to={`/HomePage`}><img src={OurLogo} alt="our news logo" className="ourlogo" ></img></Link>
        </header>
        <h4>Meet the Creators</h4>
        <p>Rebecca Sell and Jada Woody</p>
        <div className="divOfCreators">
            <article>
                <p>Rebecca Sell</p>
            </article>
            <article>
                <p>Jada Woody</p>
            </article>
        </div>
      </div>
    );
}

export default Creator;