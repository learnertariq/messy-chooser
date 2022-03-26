import React from "react";
import Card from "./Card";

const Products = ({ onAddToCart, laptops }) => {


  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2">
      {laptops.map((laptop) => {
        return (
          <div key={laptop.id} className="">
            <Card laptop={laptop} onAddToCart={onAddToCart} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
