import React from "react";

export const Product = (props) => {
  const { data, heading } = props;
  return (
    <div className="product-list">
      <h1>{heading}</h1>
      <div className="products">
        {data.map((t) => {
          return (
            <div className="product" key={t.id}>
              <img src={t.image} alt=""></img>
              <h5>{t.description}</h5>
              <h4>{t.price}</h4>
              <button className="shop-btn" onClick={() => {}}>
                Order Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
