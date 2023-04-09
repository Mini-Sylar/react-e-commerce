import { FaShoppingCart } from "react-icons/fa";

import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";
import { Link } from "react-router-dom";

const Account = () => {
  let store = useGlobalContext();
  const cartTotal = store.state.cartQuantity;
  return (
    <div className="account">
      <div className="cart">
        <Link to={"/cart"}>
          <span className="account-details">
            <FaShoppingCart></FaShoppingCart>
            <span className="items-in-cart">{cartTotal}</span>
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Account;
