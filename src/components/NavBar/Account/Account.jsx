import { FaShoppingCart } from "react-icons/fa";

import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";
import { Link } from "react-router-dom";
import "./Account.css";

const Account = () => {
  // let { store } = useGlobalContext();
  let { auth, store, modal } = useGlobalContext();
  const cartTotal = store.state.cartQuantity;

  const handleShowModal = () => {
    modal.openModal(false);
  };

  return (
    <div className="account">
      <div className="cart">
        <Link to={"/cart"} className="contains-link-to-accounts">
          {auth.state.user ? (
            <span className="account-user">
              Welcome, {auth.state.user.username}
            </span>
          ) : (
            <span className="account-user">Welcome, Guest</span>
          )}
          <span className="account-details">
            <FaShoppingCart></FaShoppingCart>
            <span className="items-in-cart">{cartTotal}</span>
          </span>
        </Link>
      </div>
      <div className="login">
        <button className="btn-rounded small-rounded" onClick={handleShowModal}>
          Login
        </button>
      </div>
    </div>
  );
};
export default Account;
