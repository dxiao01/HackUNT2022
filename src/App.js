import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Resources from "./Components/Resources";
import Profile from "./Components/Profile";
function App() {
  return (
    <div class="">
      <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/resources" element = {<Resources/>} />
          <Route path="/profile" element = {<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
