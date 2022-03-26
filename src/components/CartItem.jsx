import React from "react";

const CartItem = ({ laptop: { id, name, img }, onDelete }) => {
  return (
    <div className="selected-product">
      <div className="col row">
        <div className="col col-3">
          <img style={cartItemStyles.img} src={img || ""} alt="img" />
        </div>
        <div className="col">
          <h6>{name}</h6>
        </div>
        <div onClick={() => onDelete(id)} className="col col-2 me-2">
          <i className="pointer">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </i>
        </div>
      </div>
    </div>
  );
};

const cartItemStyles = {
  img: {
    width: "20px",
    height: "20px",
  },
};

export default CartItem;
