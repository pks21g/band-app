import React from "react";
import { tshirts } from "../data/products";

export const Store = () => {
  return (
    <div className="products">
      {tshirts.map((t) => {
        return (
          <div className="product" key={t.id}>
            <img src={t.image} alt=""></img>
            <h5>{t.description}</h5>
            <h4>{t.price}</h4>
            <button className="shop-btn">Order Now</button>
          </div>
        );
      })}
    </div>
  );
};
