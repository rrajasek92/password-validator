import React, { useEffect } from 'react';
import axios from 'axios';
import { LandingPage } from './components'
import { getUser } from './api';
import './App.css';

function App() {

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

  // useEffect(() => {
  //   fetch("https://reqres.in/api/users?page=2")
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // },[])




  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
