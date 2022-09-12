import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import ProductListItem from "./Components/ProductListItem/ProductListItem";
import AddReceipt from "./Components/AddReceipt/AddReceipt";

function App() {
  const [products, setProducts] = useState([]);
  const [expense, setExpense] = useState([]);


  const addExpense = e => {
    setExpense([...expense, e])
  }

  const addProduct = (product) => {
    setProducts([...products, product]);
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
      <AddReceipt addExpense = {addExpense}/>
    </div>
  );
}

export default App;
