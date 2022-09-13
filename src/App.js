import React, { useState, useEffect } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import ProductListItem from "./Components/ProductListItem/ProductListItem";
import AddReceipt from "./Components/AddReceipt/AddReceipt";
import Receipt from "./Components/AddReceipt/AddReceipt";


function App() {
  const [products, setExpenses] = useState([]);
  const [receipt, setReceipt] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    calculateSum()
  })

  const addReceipt = e => {
    setReceipt([...receipt, e])
  }

  const addExpense = (product) => {
    setExpenses([...products, product] );
  };

  const calculateSum = () => {
    let sum = 0
    setTotal(products.forEach(element => sum += Number(element.price)))
  }



  return (
    <div className="App-header">
      <Expenses addExpense={addExpense} />
      {products.map((product, i) => (
        <ProductListItem key={i} item={product} />
      ))}
      {
        receipt.map(i => <Expenses key={i} />)
      }
      <AddReceipt addReceipt = {addReceipt} total={total}/>
    </div>
  );
}

export default App;
