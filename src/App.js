import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Resources from "./Components/Resources";
import Profile from "./Components/Profile";
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div class="">
      <Navbar/>
      <div class=" pt-10">
      <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/resources" element = {<Resources/>} />
          <Route path="/profile" element = {<Profile/>} />
          <Route path="/signup" element = {<Signup/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
