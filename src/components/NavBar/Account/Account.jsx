import { MdOutlineAccountBox, MdShoppingCart } from "react-icons/md";

const Account = () => {
  return (
    <div className="account">
      <div className="user">
        <MdOutlineAccountBox></MdOutlineAccountBox>
        Account
      </div>
      {/* Cart */}
      <div className="cart">
        <MdShoppingCart></MdShoppingCart>
        Cart
      </div>
    </div>
  );
};
export default Account;
