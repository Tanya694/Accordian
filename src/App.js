import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="App">
      <div>
        <h6>What is a question?</h6>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "Minus" : "Plus"}
        </button>
        {showInfo && <h6>What is a Answer</h6>}
      </div>
    </div>
  );
}
