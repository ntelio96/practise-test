import React from "react";
import "./expenseListItem.css";

function ExpenseListItem({ item }) {
  return (
    <>
      <div className="container expenses__container">
        <div className="expenses__field">
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseListItem;
