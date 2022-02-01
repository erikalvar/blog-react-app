import React from "react";
import { Routes, Route } from 'react-router-dom'

import HomePage from "./HomePage";
import SignIn from "./SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
