import React from 'react'
import { useState } from 'react'
import './inputs.css'


function Inputs() {

    const [name, setName] = useState('')
    const [price, setPrice]= useState('')

  return (
  <>
  <div className='container inputs__container'>
    <div className='input-fields'>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
    </div>
    
    
  </div>
  
  </>
  )
}

export default Inputs