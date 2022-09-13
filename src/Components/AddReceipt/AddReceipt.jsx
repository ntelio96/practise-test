import React from 'react'
import './addReceipt.css'


function Receipt({addExpense}, {total}) {
  return (
  <>
  <div className="container receipt__container">
    <div className='total__price'>
        <p>Total</p>
        <h3>€ {total}</h3>
    </div>
    <div className="move__bot__btn">
      <button className='btn btn-primary' onClick={addExpense}>Add receipt</button>
    </div>
  </div>
  </>
  )
}

export default Receipt