import React from "react";
import { Routes, Route } from 'react-router-dom'

import HomePage from "./HomePage";
import SignIn from "./SignIn";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/aboutme" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
