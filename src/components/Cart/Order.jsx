import OrderDetails from "./OrderDetails/OrderDetails";
import OrderSummary from "./OrderSummary/OrderSummary";
import EmptyState from "./EmptyState/EmptyState";
import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";

import "./Order.css";

const Order = () => {
  let { store } = useGlobalContext();

  return (
    <div className="main-order-container">
      <div className="view-order">
        <div className="order-title">
          <h2>Order</h2>
          <h2>{store.state.cartQuantity} Items</h2>
        </div>
        <div className="order-container">
          {(store.state.cart.length > 0 &&
            store.state.cart.map((product) => {
              return (
                <OrderDetails
                  key={product._id}
                  product={product}
                ></OrderDetails>
              );
            })) || <EmptyState></EmptyState>}
        </div>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <OrderSummary></OrderSummary>
      </div>
    </div>
  );
};
export default Order;
