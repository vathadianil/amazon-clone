import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { nanoid } from "nanoid";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const removeFromBasket = (item) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: { ...item },
    });
  };
  const checkoutProductElement = basket.map((product) => (
    <CheckoutProduct
      {...product}
      key={nanoid()}
      removeFromBasket={() => removeFromBasket(product)}
    />
  ));
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkout__ad"
          alt="Advertisement"
        />
        <div>
          <h4 className="checkout__userGreeting"> Hello, {user?.email}</h4>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        {checkoutProductElement}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
