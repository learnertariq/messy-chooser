import React from "react";
import CartItem from "./CartItem";

const Cart = ({selectedLaptops}) => {
  return (
    <div className="border border-success rounded p-2">
      <h2>Selected Laptops</h2>
      <hr />

      <div
        className="selected-products-container d-flex flex-column gap-2"
        style={cartStyles.selectedProductsContainer}
      >
        {selectedLaptops.map(laptop => <CartItem key={laptop.id} name={laptop.name} img={laptop.img} />)}
        
      </div>

      <hr />
      <button className="btn btn-success my-2 me-2">Choose one for me</button>
      <button className="btn btn-warning">Choose again</button>
    </div>
  );
};

const cartStyles = {
  selectedProductsContainer: {
    
  },
};

export default Cart;
