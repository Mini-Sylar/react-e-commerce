import Product from "../Product/Product";
import "./Deals.css";
import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";
import Skeleton from "react-loading-skeleton";

const Deals = () => {
  let {store} = useGlobalContext();

  let cheapest = store.state.products.sort((a, b) => a.price - b.price);
  return (
    <div className="sub-container">
      <h2>Deals Just For You!</h2>
      {store.state.products.length > 0 ? (
        <div className="contains-product">
          {cheapest.map((product) => {
            return <Product key={product._id} product={product}></Product>;
          })}
        </div>
      ) : (
        <div className="skeleton">
          <Skeleton height={250}></Skeleton>
        </div>
      )}
    </div>
  );
};
export default Deals;
