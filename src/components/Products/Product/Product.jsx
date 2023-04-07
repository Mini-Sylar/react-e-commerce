import "./Product.css";
import headphones_pink from "@/assets/images/airpods_max_pink.jpg";

const Product = () => {
  return (
    <div className="product-container">
      <div className="image">
        <img src={headphones_pink} alt="Product Image" width={"100%"} />
      </div>
      <div className="product-details">
        <div className="name-add-to-cart"></div>
        <div className="price">
          <h4>Wireless Earbuds, IPX8</h4>
          <h5>Organic Cotton, fairtrade certified</h5>
          <div className="star-rating">
            <div className="star">&star;</div>
            <span>(111)</span>
          </div>
        </div>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="heart"></div>
    </div>
  );
};
export default Product;
