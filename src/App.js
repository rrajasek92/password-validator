import React, { useEffect } from 'react';
import axios from 'axios';
import { LandingPage } from './components'
import { getUser } from './api';
import './App.css';

function App() {
  sessionStorage.setItem("user", "placeholder")
  useEffect(() => {
    axios.get(getUser)
    .then(res => {
      try {
        let obj = eval('(' + res.data + ')');
        let email = obj.user.email;
        let userName = email.match(/^([^@]*)@/)[1];
        sessionStorage.setItem("user", userName);
      } catch(err){
        console.log(err)
      }
    })
    .catch((err) => {
      alert("Error retrieving user information")
    })
  },[])

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
