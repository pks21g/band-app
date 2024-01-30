import React from "react";
import StoreNav from "./StoreNav";
import { accessories } from "../../data/products";
import { Product } from "./Product";
export const Accessories = () => {
  return (
    <div className="component">
      <StoreNav />
      <Product data={accessories} heading="Accessories" />
    </div>
  );
};
