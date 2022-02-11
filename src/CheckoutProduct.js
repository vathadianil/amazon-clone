import React from "react";
import { nanoid } from "nanoid";
import "./CheckoutProduct.css";

function CheckoutProduct(props) {
  return (
    <div className="checkoutProduct">
      <img
        src={props.image}
        alt="Checkout Product Cover"
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title} </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.price} </strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(Math.ceil(props.rating))
            .fill()
            .map(() => (
              <p key={nanoid()}>⭐</p>
            ))}
        </div>
        <button onClick={props.removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
