import React from 'react'
import './receipt.css'


function Receipt() {
  return (
  <>
  <div className="container receipt__container">
    <div className='total__price'>
        <p>Total</p>
        <h3>€</h3>
    </div>
    <div className="move__bot__btn">
      <button className='btn btn-primary'>Add receipt</button>
    </div>
  </div>
  </>
  )
}

export default Receipt