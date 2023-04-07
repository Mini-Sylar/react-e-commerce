import Product from "../Product/Product";

import "./Deals.css";

const Deals = () => {
  return (
    <div className="sub-container">
      <h2>Deals Just For You!</h2>
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
export default Deals;
