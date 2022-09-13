import React, { useState, useEffect } from "react";
import "./App.css";
import Receipts from "./Components/Receipts/Receipts";
import BottomBar from "./Components/BottomBar/BottomBar";

function App() {
  const [receipt, setReceipt] = useState([]);

  const addReceipt = () => {
    setReceipt([...receipt, {}]);
  };

  return (
    <div className="App-header">
      {receipt.map((i, index) => (
        <Receipts key={index} />
      ))}
      <BottomBar addReceipt={addReceipt} />
    </div>
  );
}

export default App;
