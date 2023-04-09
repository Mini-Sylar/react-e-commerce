import "./OrderDetails.css";

const OrderDetails = ({ product }) => {
  return (
    <div className="order-details">
      <div className="details">
        <div className="left-side">
          <img src={product.product_image} alt="" />
        </div>
        <div className="right-side">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="price">
        <h3>${product.price}</h3>
      </div>
      <div className="quantity">
        <p>Quantity</p>
        <input type="number" />
      </div>
    </div>
  );
};
export default OrderDetails;
