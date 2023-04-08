import "./Product.css";
import headphones_pink from "@/assets/images/airpods_max_pink.jpg";
import { FaStar } from "react-icons/fa";

const Product = ({ product }) => {
  let stars = [];
  for (let i = 0; i < product?.rating; i++) {
    stars.push(<FaStar key={i} />);
  }
  return (
    <div className="product-container">
      <div className="image">
        <img src={headphones_pink} alt="Product Image" width={"100%"} />
      </div>
      <div className="product-details">
        <div className="name-add-to-cart"></div>
        <div className="price">
          <h4>{product?.name}</h4>
          <h5>{product?.description}</h5>
          <div className="star-rating">
            <div className="star">{stars}</div>
            <span>(111 Reviews)</span>
          </div>
        </div>
        <div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="heart"></div>
    </div>
  );
};
export default Product;
