import "./EmptyState.css";
import EmptyCart from "../../../assets/images/empty-cart.png";
import { Link } from "react-router-dom";
const EmptyState = () => {
  return (
    <div className="empty-cart-state">
      <div className="empty-cart-image">
        <img src={EmptyCart} alt="Empty cart" width={100} />
      </div>
      <div className="empty-cart-text">
        <h2>Cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to={"/"} className="add-item">
          Add items to get started
        </Link>
      </div>
    </div>
  );
};
export default EmptyState;
