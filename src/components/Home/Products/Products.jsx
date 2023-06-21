import Product from "./Product/Product";

import "./Products.css";
import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";
import { memo } from "react";
import Skeleton from "react-loading-skeleton";


const Products = () => {
  let {store} = useGlobalContext();
  let sortedProducts = store.state.products
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="sub-container" id="products">
      <h2>Headphones For You</h2>
      {store.state.products.length > 0 ? (
        <div className="contains-product">
          {sortedProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="skeleton">
          <Skeleton height={250}></Skeleton>
        </div>
      )}
    </div>
  );
};
export default memo(Products);
