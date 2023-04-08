import Product from "./Product/Product";

import "./Products.css";
import { useGlobalContext } from "../GlobalContext/GlobalContext";

const Products = () => {
  const store = useGlobalContext();
  console.log(store);

  return (
    <div className="sub-container">
      <h2>Headphones For You</h2>
      <div className="contains-product">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </div>
  );
};
export default Products;
