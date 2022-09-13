import React from "react";
import './productItemList.css'

function ProductListItem({ item }) {
  return (
    <>
<div className="container products__container">
  <div className="products__field">
    <div>{item.name}</div>
    <div>{item.price}</div>
  </div>
</div>
      
    </>
  );
}

export default ProductListItem;
