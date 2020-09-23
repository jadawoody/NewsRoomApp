import React from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
    return (
        <div className="black">
            <nav className="ghost">
               <ul className="spooky">
                   <li className="trick"><Link to={`/NewsPage`}>Get News</Link></li>
                   <li className="trick"><Link to={`/WeatherPage`}>Get Yo Weather</Link></li>
                   <li className="trick"><Link to={`/SportsPage`}>Sports Updates</Link></li>
                   <li className="trick"><Link to={`/CalmPage`}>Calming Corner</Link></li>
                   <li className="trick"><Link to={`/HoroscopePage`}>Get Yo Horoscope</Link></li>
               </ul> 
            </nav>
            <body>

            </body>
        </div>
    );
}

export default Home;