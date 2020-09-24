import React, {useState, useEffect} from 'react';
import axios from 'axios';

function GetWeather(props) {
let [weather, setWeather] = useState({})
let [zip, setZip] = useState([])

    // console.log("use")
  const weatherSearch = async (e) => {
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=48170,us&appid=0371e4942a3c25413c7c7598193f0b57`)
        setWeather(res.data)
        console.log(res.data)
    }
    // weatherSearch()
   console.log(zip)

 const displayWeather =() => {

 }
// function getZip(){
//     const handleChange = (e) => {
//     setZip(e.target.value)
//     }
// }
console.log(zip)
    return (
        <div>
            <h3>Welcome To The Weather Page!</h3>
            <p>Search for Today's Weather by Zipcode!</p>
            {weather.name}
            {weather.main?.temp}
            
            <input onChange={(e) => setZip(e.target.value)} value={zip} type="text" placeholder="Search By Zip Code" name="searchBar"></input>
            <button onClick={weatherSearch} type="submit">Search!</button>
        </div>
    );
}



export default GetWeather;