import React, { useState } from 'react'
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import ProductListItem from './Components/ProductListItem/ProductListItem';
import Receipt from './Components/Receipt/Receipt';


function App() {

  const [products, setProducts] = useState([]);

  const addProduct = product => {
    setProducts([...products, product])
  }

  return (
    <div className="App-header">
      <Expenses addProductProp={addProduct}/>
      {
        products.map((product, i) => <ProductListItem key={i} item={product}/>)
      }
      <Receipt/>
    </div>
  );
}

export default App;
