import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import ProductListItem from "./Components/ProductListItem/ProductListItem";
import AddReceipt from "./Components/AddReceipt/AddReceipt";
import Receipt from "./Components/AddReceipt/AddReceipt";

function App() {
  const [products, setProducts] = useState([]);
  const [expense, setExpense] = useState([]);
  const [total, setTotal] = useState('0')

  const addExpense = e => {
    setExpense([...expense, e])
  }

  const addProduct = (product) => {
    let sum = 0
    setProducts([...products, product]);
    // setTotal(products.forEach(element => sum += element.price))
    // console.log(total)
  };



  return (
    <div className="App-header">
      <Expenses addProduct={addProduct} />
      {products.map((product, i) => (
        <ProductListItem key={i} item={product} />
      ))}
      {
        expense.map(i => <Expenses key={i} />)
      }
      <AddReceipt addExpense = {addExpense} total={total}/>
    </div>
  );
}

export default App;
