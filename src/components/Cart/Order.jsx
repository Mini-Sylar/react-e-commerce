import OrderDetails from "./OrderDetails/OrderDetails";
import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";

const Order = () => {
  let store = useGlobalContext();
  return (
    <div>
      <h2>Order</h2>
      <div>
        {store.state.cart.length > 0 &&
          store.state.cart.map((product) => {
            return (
              <OrderDetails key={product._id} product={product}></OrderDetails>
            );
          })}
      </div>
    </div>
  );
};
export default Order;
