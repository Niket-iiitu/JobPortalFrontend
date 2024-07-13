import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import JobAdd from "./Pages/JobAdd/JobAdd";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<JobAdd />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
