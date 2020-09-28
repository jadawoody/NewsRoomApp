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
import Creator from "./Components/Creator";
// import news from './news.json';

function App() {
  // fetch("https://newscatcher.p.rapidapi.com/v1/search?media=True&sort_by=relevancy&lang=en&page=1&q=Elon%20Musk", {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-host": "newscatcher.p.rapidapi.com",
  //     "x-rapidapi-key": "79c208b29dmshca6fa50a24dc9fep186483jsn89697872cd62"
  //   }
  // })
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(err => {
  //   console.log(err);
  // });

  let [newsData, setNewsData] = useState([]);
  useEffect(() => {
    // console.log(process.env);
    async function getData() {
      let res = await axios.get(
        "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
      );
      console.log(res)
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
        "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=8548ffbce9044871b20fdb22e4385a07"
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
        "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=648ce50d8c134f1cbb0252360ef3ec6a"
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
      console.log(res.data.slip.advice);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/NewsPage"
          render={() => <GetNews newsDataProp={newsData} />}
        />
        {/* WHY ARE WE SETTING THE STATE TO THE STATE?? We thought we should be setting the state to the variable holding our map through the API */}
        <Route
          exact
          path="/SportsPage"
          render={() => <GetSports sportsDataProp={sportsData} />}
        />
        <Route
          exact
          path="/CalmPage"
          render={() => (
            <GetCalm
              quoteProp={quote}
              authorProp={author}
              adviceProp={advice}
            />
          )}
        />
        <Route exact path="/WeatherPage" render={() => <GetWeather />} />
        <Route
          exact
          path="/TechPage"
          render={() => <GetTech techProp={tech} />}
        />
        <Route exact path="/CreatorPage" render={() => <Creator />} />
      </Switch>
    </div>
  );
}

export default App;
