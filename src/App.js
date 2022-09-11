import React from 'react'
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import Inputs from './Components/Inputs/Inputs';
import Receipt from './Components/Receipt/Receipt';


function App() {
  return (
    <div className="App-header">
      <Expenses/>
      <Receipt/>
      <Inputs/>
    </div>
  );
}

export default App;
