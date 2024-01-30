import React, { useEffect } from "react";
import StoreNav from "../StoreNav";
import { Product } from "../Product";
import { tshirts } from "../../data/products";

export const Apparel = () => {
  // const title = document.getElementById('title');
  // title.innerHTML = "Disco Fighter | Apparel";
  useEffect(() => {
    document.title = "Disco Fighter | Apparel";
  });
  return (
    <div className="component">
      <StoreNav />
      <Product data={tshirts} heading="Apparel"/>
    </div>
  );
};
