import React from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

function Home() {
  const navigate = useNavigate();

  const redirectToJobAdd = () => {
    navigate("/add");
  };

  return (
    <div className="home">
      <div className="heading">
        <h1>Job Menia</h1>
        <p>Make your dreams come true!!!</p>
      </div>
      <div>
        <div className="card">
          <h2 className="card-title">What are you looking for?</h2>
          <div className="card-buttons">
            <button className="card-button find-job">Find a Job</button>
            <button className="card-button add-job" onClick={redirectToJobAdd}>
              Add a Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
