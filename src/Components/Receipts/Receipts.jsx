import React from "react";
import { useState, useEffect } from "react";
import "./receipts.css";
import ExpenseListItem from "../ExpenseListItem/ExpenseListItem";

function Receipts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [check, setCheck] = useState(false);
  const [expenses, setExpenses] = useState([]);
  // const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   calculateSum();
  // });

  // const calculateSum = () => {
  //   let sum = 0;
  //   setTotal(expenses.forEach((element) => (sum += Number(element.price))));
  // };

  const checkSelect = () => {
    setCheck(true);
  };

  const addExpenses = (_) => {
    const newExpense = { name, price };
    setExpenses([...expenses, newExpense]);
    setName("");
    setPrice("");
  };

  return (
    <>
      <div className="container receipts__container">
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
      {expenses.map((product, i) => (
        <ExpenseListItem key={i} item={product} />
      ))}
    </>
  );
}

export default Receipts;
