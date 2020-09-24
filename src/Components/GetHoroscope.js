import React, { useState } from "react";
import axios from "axios";

function GetHoroscope(props) {
  let [horoscope, setHoroscope] = useState();
  const fetchHoroscope = async (e) => {
    let res = await axios.get(
      "https://www.prokerala.com/astrology/astrology-api.htm"
    );
    setHoroscope(res.data);
    console.log(horoscope);
  };
  fetchHoroscope();
  return (
    <div>
      <h3>Your Daily Horoscope</h3>
    </div>
  );
}

export default GetHoroscope;
