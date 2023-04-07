import Product from "../Product/Product";

import "./TopProducts.css";

const TopProducts = () => {
  return (
    <div className="sub-container">
      <h2>Top Sellers!</h2>
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
export default TopProducts;
