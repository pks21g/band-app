import React from "react";
import { tshirts, accessories, music } from "../data/products";
import StoreNav from "../components/StoreNav";
import { Product } from "../components/Product";

export const Store = () => {
  return (
    <>
    <StoreNav />
    <div className="store">
    <Product data={tshirts} heading="Apparel"/>
    <Product data={accessories} heading="Accessories"/>
    <Product data={music} heading="Music"/>
    </div>
    </>
    

    
  );
};
