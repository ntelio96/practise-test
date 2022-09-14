import React, { useState } from "react";
import "./App.css";
import Receipts from "./Components/Receipts/Receipts";
import BottomBar from "./Components/BottomBar/BottomBar";

function App() {
  const [receipt, setReceipt] = useState([]);
  const [total, setTotal] = useState(0);

  const updateTotalReceipt = (index, sum) => {
    receipt[index] = { price: sum };
    setReceipt(receipt);
    totalPrice();
  };

  const totalPrice = () => {
    setTotal(
      receipt.reduce((previousValue, currentValue) => {
        if (currentValue.price) {
          return previousValue + currentValue.price;
        } else {
          return previousValue;
        }
      }, 0)
    );
  };

  const addReceipt = () => {
    setReceipt([...receipt, {}]);
  };

  return (
    <div className="App-header">
      {receipt.map((_, index) => (
        <Receipts
          onSumChange={(sum) => updateTotalReceipt(index, sum)}
          key={index}
        />
      ))}
      <BottomBar addReceipt={addReceipt} total={total} />
    </div>
  );
}

export default App;
