import React from "react";
import CartItem from "./CartItem";

const Cart = ({ selectedLaptops, onChooseOne, onChooseAgain, onDelete }) => {
  return (
    <div className="border border-success rounded p-2">
      <h2>Selected Laptops</h2>
      <hr />

      <div
        className="selected-products-container d-flex flex-column gap-2"
        style={cartStyles.selectedProductsContainer}
      >
        {selectedLaptops.map((laptop) => (
          <CartItem key={laptop.id} laptop={laptop} onDelete={onDelete} />
        ))}
      </div>

      <hr />
      <button onClick={onChooseOne} className="btn btn-success my-2 me-2">
        Choose one for me
      </button>
      <button onClick={onChooseAgain} className="btn btn-warning">
        Choose again
      </button>
    </div>
  );
};

const cartStyles = {
  selectedProductsContainer: {},
};

export default Cart;
