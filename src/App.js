import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/header'
import Photo from './components/photo'
import Description from "./components/description"
import { BASE_URL, API_KEY } from "./constants/nasa_api";
import styled from 'styled-components'
// import Styles from './components/styles'


function App() {

  const [nasa, setNasa] = useState([])

  const Container = styled.div`
  background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    border:1px solid lightskyblue;
  `;
  const Text = styled.p`
  text-align:center;
  color:lightskyblue;
  width:65%;
  border:1px solid lightskyblue;
  padding:20px;
  `;
  const Headline = styled.div`
  text-decoration: underline;
  color:lightskyblue;
  `;
  const Picture = styled.div`
  border:2px solid lightskyblue;
  `

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
    <Container>
      <Headline>
      <Header />
      </Headline>
      <Picture>
      <Photo key={nasa.date} imgUrl={nasa.url}/>
      </Picture>
      <Text>
      <Description
      key={nasa.title}
      title={nasa.title}
      date={nasa.date}
      explanation={nasa.explanation}
      />
      </Text>
    </Container>
  );
}

export default App;
