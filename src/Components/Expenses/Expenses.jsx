import React from "react";
import { useState } from "react";
import "./expenses.css";

function Expenses({ addExpense }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [check, setCheck] = useState(false);

  const checkSelect = () => {
    setCheck(true);
  };

  const addExpenses = (_) => {
    addExpense({
      name,
      price
    });
    setName("");
    setPrice("");
    console.log(name, price)
  };

  return (
    <>
      <div className="container expenses__container">
        <select onChange={checkSelect}>
          <option value="" selected disabled hidden>
            Select
          </option>
          <option value="Food">Food</option>
          <option value="Houseware">Houseware</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <div className="move__btn">
          <button className="btn btn-secondary" onClick={addExpenses}>
            Add Expense
          </button>
        </div>
      </div>
      {check && (
        <div className="container inputs__container">
          <div className="input-fields">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Expense name"
            />
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Value €"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Expenses;
