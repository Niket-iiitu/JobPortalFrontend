import React from "react";
import "./OkPopup.css";

const OkPopup = (data, onClose) => {
  console.log("Popup data: " + data);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Popup</h2>
        <p>{data}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default OkPopup;
