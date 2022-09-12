import React from "react";

function ProductListItem({ item }) {
  return (
    <>
      <div>{item.name}</div>
      <div>{item.price}</div>
    </>
  );
}

export default ProductListItem;
