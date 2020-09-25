import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import GetNews from "./Components/GetNews";
import Home from "./Components/Home";
import GetSports from "./Components/GetSports";
import GetCalm from "./Components/GetCalm";
import GetWeather from "./Components/GetWeather";
import GetTech from "./Components/GetTech";
// import news from './news.json';

function App() {
  let [newsData, setNewsData] = useState([]);
  useEffect(() => {
    // console.log(process.env);
    async function getData() {
      let res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=648ce50d8c134f1cbb0252360ef3ec6a"
      );

      setNewsData(res.data.articles);
    }
    getData();
  }, []);

  let [sportsData, setSportsData] = useState([]);
  useEffect(() => {
    // console.log(process.env);
    async function getData() {
      // let res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b4a64c5bb417492fba2da8efffe06acb')
      let res = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=8548ffbce9044871b20fdb22e4385a07"
      );

      setSportsData(res.data.articles);
      // setNewsData(news)
      //  console.log(res.data.articles[0])
    }
    getData();
  }, []);

  let [tech, setTech] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await axios.get(
        "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=648ce50d8c134f1cbb0252360ef3ec6a"
      );
      setTech(res.data.articles);
      console.log(res.data.articles);
    }
    getData();
  }, []);

  let [quote, setQuote] = useState([]);
  let [author, setAuthor] = useState([]);
  useEffect(() => {
    async function getQuote() {
      let res = await axios.get(`https://api.quotable.io/random`);
      console.log(res);
      console.log(res.data.content);
      setQuote(res.data.content);
      setAuthor(res.data.author);
    }
    getQuote();
  }, []);

  let [advice, setAdvice] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(res.data.slip);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <h3>Welcome to NewsApp!</h3>

      <Switch>
        <Route path="/HomePage" render={() => <Home />} />
        <Route
          path="/NewsPage"
          render={() => <GetNews newsDataProp={newsData} />}
        />
        {/* WHY ARE WE SETTING THE STATE TO THE STATE?? We thought we should be setting the state to the variable holding our map through the API */}
        <Route
          path="/SportsPage"
          render={() => <GetSports sportsDataProp={sportsData} />}
        />
        <Route
          path="/CalmPage"
          render={() => (
            <GetCalm
              quoteProp={quote}
              authorProp={author}
              adviceProp={advice}
            />
          )}
        />
        <Route path="/WeatherPage" render={() => <GetWeather />} />
        <Route path="/TechPage" render={() => <GetTech techProp={tech} />} />
      </Switch>
    </div>
  );
}

export default App;
