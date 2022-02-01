import React from "react";
import { Routes, Route } from 'react-router-dom'

import HomePage from "./HomePage";
import LogIn from "./LogIn";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/aboutme" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
