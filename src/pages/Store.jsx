import React from "react";
import { tshirts, accessories, music } from "../data/products";
import StoreNav from "../components/store/StoreNav";
import { Product } from "../components/store/Product";

export const Store = () => {
  return (
    <>
      <StoreNav />
      <div className="store">
        <Product data={tshirts} heading="Apparel" />
        <Product data={accessories} heading="Accessories" />
        <Product data={music} heading="Music" />
      </div>
    </>
  );
};
