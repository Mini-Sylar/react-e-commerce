
import Product from "../Product/Product";

import "./Deals.css";

import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";

const Deals = () => {
  let store = useGlobalContext();

  let cheapest = store.state.products.sort((a, b) => a.price - b.price);
  return (
    <div className="sub-container">
      <h2>Deals Just For You!</h2>
      <div className="contains-product">
        {cheapest.map((product) => {
          return <Product key={product._id} product={product}></Product>;
        })}
      </div>
    </div>
  );
};
export default Deals;
