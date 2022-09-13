import React from 'react'
import "./sum.css";

function Sum({sum}) {
  return (
    <>
      <div className="container sum__container">
        <div className="sum__field">
          <div>Total</div>
          <h3>€ {sum}</h3>
        </div>
      </div>
    </>
  )
}

export default Sum