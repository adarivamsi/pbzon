import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import FirstFour from "../firstfour/FirstFour";
import Product from "../product/Product";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      let products = [];
      snapshot.docs.forEach((doc) => {
        products.push({
          id: doc.id,
          product: doc.data(),
        });
      });
      setProducts(products);
    });
  }, []);

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YTQzYWRkNWYt/YTQzYWRkNWYt-ZDkyNTQ5OGMt-w1500._CB413865922_.jpg"
        alt=""
      />
      <div className="four__row">
        {products.slice(0, 4).map(({ id, product }) => (
          <FirstFour
            key={id}
            id={id}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>
      <div className="home__row">
        {products.slice(0, 2).map(({ id, product }) => (
          <Product
            key={id}
            id={id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
      <div className="home__row">
        {products.slice(2, 5).map(({ id, product }) => (
          <Product
            key={id}
            id={id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
      <div className="home__row">
        {products.slice(5, 6).map(({ id, product }) => (
          <Product
            key={id}
            id={id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
