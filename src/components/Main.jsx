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
    if (isMoreThan4Item()) return;
    if (isDuplicate(id)) return;

    const newlySelectedLaptop = laptops.find((laptop) => laptop.id === id);
    const newlySelectedLaptops = [...selectedLaptops, newlySelectedLaptop];

    toggleSelectionInMainLaptopsArray(newlySelectedLaptops);

    setSelectedLaptops(newlySelectedLaptops);
  };

  const handleChooseOne = () => {
    const index = getRandomIndex();
    const chosenLaptop = selectedLaptops[index];

    chosenLaptop
      ? alert(`you can buy ${chosenLaptop.name} with $${chosenLaptop.price}`)
      : alert(`Your cart is empty`);
  };

  const handleChooseAgain = () => {
    toggleSelectionInMainLaptopsArray([]);
    setSelectedLaptops([]);
  };

  const handleDeleteOneCartItem = (id) => {
    const laptopsWithoutDeleted = selectedLaptops.filter(
      (laptop) => laptop.id !== id
    );

    toggleSelectionInMainLaptopsArray(laptopsWithoutDeleted);

    setSelectedLaptops(laptopsWithoutDeleted);
  };

  return (
    <div className="row container mx-auto mt-5 g-3 position-relative">
      <div className="col-12 col-md-8 order-2 order-md-1">
        <Products onAddToCart={handleAddToCart} laptops={laptops} />
      </div>
      <div
        className="col-12 col-md-4 order-1 order-md-2 sticky-md-top"
        style={styles.cartContainer}
      >
        <Cart
          selectedLaptops={selectedLaptops}
          onChooseOne={handleChooseOne}
          onChooseAgain={handleChooseAgain}
          onDelete={handleDeleteOneCartItem}
        />
      </div>
    </div>
  );

  function toggleSelectionInMainLaptopsArray(currentlySelectedLaptops) {
    const ids = getIds(currentlySelectedLaptops);
    const newLaptops = [];

    laptops.forEach((laptop) => {
      laptop.selected = ids.includes(laptop.id);

      newLaptops.push(laptop);
    });

    setLaptops(newLaptops);
  }

  function getIds(arr) {
    const arrayOfIds = [];
    arr.forEach((laptop) => arrayOfIds.push(laptop.id));
    return arrayOfIds;
  }

  function getRandomIndex() {
    const number = selectedLaptops.length;
    return Math.floor(Math.random() * number);
  }

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

const styles = {
  cartContainer: { height: "100%", top: "50px" },
};

export default Main;
