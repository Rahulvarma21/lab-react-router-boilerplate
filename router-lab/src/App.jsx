import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import React from "react";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
