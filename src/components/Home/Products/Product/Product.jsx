import "./Product.css";
import headphones_pink from "@/assets/images/airpods_max_pink.jpg";
import { FaStar } from "react-icons/fa";
import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";
import { toast } from "react-toastify";

const Product = ({ product }) => {
  let {store} = useGlobalContext();
  let stars = [];
  for (let i = 0; i < product?.rating; i++) {
    stars.push(<FaStar key={i} />);
  }
  const isInCart = product?.addedToCart;
  return (
    <div className="product-container">
      <div className="image">
        <img
          src={product?.product_image || headphones_pink}
          alt="Product Image"
          width={"100%"}
        />
      </div>
      <div className="product-details">
        <div className="name-add-to-cart"></div>
        <div className="price">
          <div className="name-price-product">
            <h4>{product?.name}</h4>
            <h5>
              $<span className="actual-product-price">{product?.price}.00</span>
            </h5>
          </div>
          <h5>{product?.description}</h5>
          <div className="star-rating">
            <div className="star">{stars}</div>
            <span>({parseInt(Math.random() * 100)} Reviews)</span>
          </div>
        </div>
        <div>
          {isInCart == false ? (
            <button
              className="add-to-cart"
              onClick={() => {
                if (store.state.cartQuantity > 10) {
                  toast.warning("You can only add 10 items to cart");
                  return;
                }
                store.addToCart(product?._id);
              }}
            >
              Add to Cart
            </button>
          ) : (
            <button
              className="add-to-cart"
              onClick={() => {
                store.removeFromCart(product?._id);
              }}
            >
              Remove from cart
            </button>
          )}
        </div>
      </div>
      <div className="heart"></div>
    </div>
  );
};
export default Product;
