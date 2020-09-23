import React from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
    return (
        <div >
            <nav>
               <ul className="spooky">
                   <li><Link to={`/NewsPage`}>Get News</Link></li>
                   <li><Link to={`/SportsPage`}>Sports Updates</Link></li>
                   <li><Link to={`/CalmPage`}>Calming Corner</Link></li>
               </ul> 
            </nav>
            <body>

            </body>
        </div>
    );
}

export default Home;