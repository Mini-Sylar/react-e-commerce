import Product from "./Product/Product";

import "./Products.css";
import { useGlobalContext } from "../GlobalContext/GlobalContext";
import { useEffect } from "react";

const Products = () => {
  let store = useGlobalContext();

  useEffect(() => {
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
export default Products;
