import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Products from "./Products";

const Main = () => {
  const [laptops, setLaptops] = useState([]);
  const [selectedLaptops, setSelectedLaptops] = useState([]);

  const loadLaptops = async () => {
    const res = await fetch("data.json");
    const data = await res.json();
    setLaptops(data);
  };

  useEffect(() => {
    loadLaptops();
  }, []);

  const handleAddToCart = (id) => {
    console.log(id);

    if (isMoreThan4Item()) return;
    if (isDuplicate(id)) return;

    const newlySelectedLaptop = laptops.find((laptop) => laptop.id === id);
    setSelectedLaptops([...selectedLaptops, newlySelectedLaptop]);
  };

  return (
    <div className="row container mx-auto mt-5 g-3">
      <div className="col-12 col-md-8 order-2 order-md-1">
        <Products onAddToCart={handleAddToCart} laptops={laptops} />
      </div>
      <div className="col-12 col-md-4 order-1 order-md-2">
        <Cart selectedLaptops={selectedLaptops} />
      </div>
    </div>
  );

  function isDuplicate(id) {
    if (selectedLaptops.find((laptop) => laptop.id === id)) {
      alert("you cannot select the product twice");
      return true;
    }
    return false;
  }

  function isMoreThan4Item() {
    if (selectedLaptops.length >= 4) {
      alert("you cannot select more than 4 laptops");
      return true;
    }

    return false;
  }
};

export default Main;
