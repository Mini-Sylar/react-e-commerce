import Product from "./Product/Product";

import "./Products.css";

const Products = () => {
  return (
    <div className="sub-container">
      <h2>Headphones For You</h2>
      <div className="contains-product">
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </div>
  );
};
export default Products;
