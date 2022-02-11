import React from "react";
import "./Product.css";
import { nanoid } from "nanoid";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //Dispatch item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title} </p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price} </strong>
        </p>
        <div className="product__rating">
          {Array(Math.ceil(props.rating))
            .fill()
            .map(() => (
              <p key={nanoid()}>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="Product Cover" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
