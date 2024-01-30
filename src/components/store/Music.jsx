import React from "react";
import StoreNav from "./StoreNav";
import { Product } from "./Product";
import { music } from "../../data/products";

export const Music = () => {
  return (
    <>
      <StoreNav />

      <div className="component">
        <Product data={music} heading="Music" />
      </div>
    </>
  );
};
