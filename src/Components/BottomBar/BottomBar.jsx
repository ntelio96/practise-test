import React from "react";
import "./bottomBar.css";

function BottomBar({ addReceipt, total}) {
  return (
    <>
      <div className="container bottom-bar__container">
        <div className="total__price">
          <p>Total</p>
          <h3>€ {total}</h3>
        </div>
        <div className="move__bot__btn">
          <button className="btn btn__primary" onClick={addReceipt}>
            Add receipt
          </button>
        </div>
      </div>
      <div className="push__element__up"></div>
    </>
  );
}

export default BottomBar;
