import React from 'react'
import './expenses.css'


function Expenses() {
  return (
  <>
  <div className='container expenses__container'>
    <select>
      <option value="" selected disabled hidden>Choose here</option>
      <option value="1">Food</option>
      <option value="2">Houseware</option>
      <option value="3">Entertainment</option>
    </select>
    <button className='btn'>Add Expense</button>
  </div>
  
  </>
  )
}

export default Expenses