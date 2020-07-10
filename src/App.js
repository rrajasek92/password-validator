import React, {useEffect} from 'react';
import axios from 'axios';
import {LandingPage} from './components'
import {get} from './functions'
import {getUser} from './api';
import './App.css';

function App() {

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/' + getUser, {
    crossDomain: true
  })
    .then(res => {
      let string = JSON.stringify(res.data);
      let json = JSON.parse(string);
      console.log(typeof json)
    })
  },[])

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
