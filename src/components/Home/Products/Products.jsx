import Product from "./Product/Product";

import "./Products.css";
import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";
import { useEffect, memo } from "react";

const Products = () => {
  let store = useGlobalContext();

  useEffect(() => {
    if (store.state.products.length > 0) return;
    store.getProducts();
  }, []);
  return (
    <div className="sub-container">
      <h2>Headphones For You</h2>
      {store.state.products.length > 0 ? (
        <div className="contains-product">
          {store.state.products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default memo(Products);