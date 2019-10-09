import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import axios from "axios"
import { Route } from 'react-router-dom';

function App() {

  let login = (username,password) =>{
    axios.post("http://localhost:5000/api/login", { username: username, password: password })
    .then((res) => {
      console.log(res)
      localStorage.setItem("authToken", res.data.payload);
      
    })
    .catch()
  }

  return (
    <div className="App">
      <Route exact path="/login" component={() => <Login login={login}/>}/>
    </div>
  );
}

export default App;
