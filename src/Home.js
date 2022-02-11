import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const product1 = {
    id: "12321341",
    title:
      "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    price: 11.96,
    rating: 5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
  };
  const product2 = {
    id: "49538094",
    title:
      "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
    price: 239.0,
    rating: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
  };

  const product3 = {
    id: "4903850",
    title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
    price: 199.99,
    rating: 3,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
  };
  const product4 = {
    id: "23445930",
    title:
      "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
    price: 98.99,
    rating: 5,
    image:
      "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
  };
  const product5 = {
    id: "3254354345",
    title:
      "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    price: 598.99,
    rating: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
  };
  const product6 = {
    id: "90829332",
    title:
      "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
    price: 1094.98,
    rating: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
  };

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._C8428684220_.jpg"
          alt="Amazon Background"
        />
        <div className="home__row">
          <Product {...product1} key={product1.id} />
          <Product {...product2} key={product2.id} />
        </div>
        <div className="home__row">
          <Product {...product3} key={product3.id} />
          <Product {...product4} key={product4.id} />
          <Product {...product5} key={product5.id} />
        </div>
        <div className="home__row">
          <Product {...product6} key={product6.id} />
        </div>
      </div>
    </div>
  );
}

export default Home;