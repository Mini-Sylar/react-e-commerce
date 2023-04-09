import "./OrderSummary.css";
import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";

const OrderSummary = () => {
  const store = useGlobalContext();
  return (
    <div className="is-order-summary">
      <div className="sub-container">
        <div className="contains-order">
          <div className="total-cost">
            <h4>Total Items ({store.state.cartQuantity})</h4>
            <h4>${store.state.cartTotal}</h4>
          </div>
          <div className="shipping">
            <h4>Shipping</h4>
            <select name="" id="" className="select-dropdown">
              <option value="" className="select">
                Standard
              </option>
            </select>
          </div>
          <div className="promo-code">
            <h4>Promo Code</h4>
            <div className="enter-promo">
              <input className="select-dropdown" type="text" />
              <button className="flat-button apply-promo">Apply</button>
            </div>
          </div>
          <div className="final-cost">
            <h4>Total Cost</h4>
            <h4>$ 0.00</h4>
          </div>
          <div className="final-checkout">
            <button className="flat-button checkout">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderSummary;
