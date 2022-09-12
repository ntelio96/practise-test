import React from 'react'
import { useState } from 'react'
import './expenses.css'


function Expenses(addProductProp) {

  const [name, setName] = useState('')
  const [price, setPrice]= useState('')

  const addProduct1 = _ => {
    addProductProp({
      name, price
  })
    setName('')
    setPrice('')
  }

  return (
  <>
  <div className='container expenses__container'>
    <select>
      <option value="" selected disabled hidden>Select</option>
      <option value="1">Food</option>
      <option value="2">Houseware</option>
      <option value="3">Entertainment</option>
    </select>
    <div className="move__btn">
      <button className='btn btn-secondary' onClick={addProduct1}>Add Expense</button>
    </div>
  </div>
  <div className='container inputs__container'>
    <div className='input-fields'>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Expense name"/>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Value €"/>
    </div>
  </div>
  </>
  )
}

export default Expenses