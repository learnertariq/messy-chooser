import React from "react";

const Card = ({laptop: { id, name, price, img }, onAddToCart}) => {
  return (
    <div className="card" style={cardStyles.card}>
      <img style={cardStyles.img} className="card-img-top" src={img} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <button onClick={() => onAddToCart(id)}
          style={cardStyles.btn}
          href="#"
          className="btn btn-primary"
        >
          Add to cart
          <i className="fas fa-shopping-cart text-warning"></i>
        </button>
      </div>
    </div>
  );
};

const cardStyles = {
  card: {
    height: "100%",
    paddingBottom: "25px",
    position: "relative",
  },
  img: {
    height: '100%',
    objectFit: 'contain'
  },

  btn: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
  },
};

export default Card;
