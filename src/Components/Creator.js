import React from 'react';
import OurLogo from '../images/OFFISHnewsroomLogo3.png';
function Creator(props) {
    return (
        <div>
        <header className="logoAllPage">
        <img src={OurLogo} alt="our news logo" className="ourlogo" ></img>

        </header>
            <h4>Creators: Rebecca Sell and Jada Woody</h4>
        </div>
    );
}

export default Creator;