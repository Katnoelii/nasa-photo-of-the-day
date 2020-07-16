import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/header'
import Photo from './components/photo'
import Description from "./components/description"
import { BASE_URL, API_KEY } from "./constants/nasa_api";

function App() {

  const [nasa, setNasa] = useState([])
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      console.log('Happy Path!')
      setNasa(res.data)
    })
    .catch(err => {
      console.log('something is wrong!:', err)
    })
  },[])


  return (
    <div className="App">
      <Header />
      <Photo key={nasa.date} imgUrl={nasa.url} />
      <Description
      key={nasa.title}
      title={nasa.title}
      date={nasa.date}
      explanation={nasa.explanation}
      />
    </div>
  );
}

export default App;
