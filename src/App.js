import React from 'react'
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import Receipt from './Components/Receipt/Receipt';


function App() {
  return (
    <div className="App-header">
      <Expenses/>
      <Receipt/>
    </div>
  );
}

export default App;
