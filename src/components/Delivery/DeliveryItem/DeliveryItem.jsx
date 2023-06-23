import "./DeliveryItem.css";
import { useState } from "react";
import { FaCaretUp } from "react-icons/fa";

const DeliveryItem = ({ order }) => {
  const [expanded, setExpanded] = useState(false);
  const date = new Date(order.expected_delivery_date);
  const currentDate = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const numberOfDays = Math.ceil(
    (date.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  );
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const checkFlair = (percentage) => {
    if (percentage < 50) {
      return "flair danger-flair";
    } else if (percentage < 90) {
      return "flair warning-flair";
    } else {
      return "flair success-flair";
    }
  };

  return (
    <div className="sub-container delivery-item-container">
      <div className="delivery-overview">
        <div className="delivery-summary">
          <div className="delivery-order-number">
            <h2 className="delivery-item-title order-main" title={order._id}>
              Order: <span>#</span>
              {order._id.slice(0, 6)}
            </h2>
            <div className="delivery-items">
              <h5>Item Count: {order.totalItemCount}</h5>
              <h5>Total Cost: ${order.cost_after_delivery_rate}</h5>
              <h5>Delivery Type: {order.delivery_type}</h5>
            </div>
          </div>
          <div className="delivery-progress">
            <h3 className="delivery-item-title">Complete</h3>
            <h4>
              {order.percentage_complete}%{" "}
              <span className={checkFlair(order.percentage_complete)}>
                {
                  // eslint-disable-next-line no-nested-ternary
                  order.percentage_complete < 50
                    ? "Verification Pending"
                    : order.percentage_complete < 90
                    ? "Verified & In Delivery"
                    : "Delivered"
                }
              </span>
            </h4>
            <progress
              className="progress-bar"
              value={order.percentage_complete}
              max="100"
            ></progress>
          </div>
          <div className="delivery-date">
            <h3 className="delivery-item-title">Expected Completion</h3>
            <h4>{formattedDate}</h4>
            <h4>{numberOfDays} day(s)</h4>
          </div>
        </div>
        <div
          className={expanded ? "fully-expanded isExpanded" : "fully-expanded"}
        >
          <div className="products-in-delivery">
            <h3>Products in Delivery</h3>
            <div className="delivery-products">
              {order.items.map((item) => {
                return (
                  <div className="delivery-products-item" key={item._id}>
                    <img src={item.product_image} alt="" width="50" />
                    <h5>Product Name: {item.name}</h5>
                    <h5>Price: ${item.price}</h5>
                    <h5>Quantity: {item.quantity}</h5>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="danger-zone">
            <h3 className="danger-zone-text">Danger Zone</h3>
            <div className="danger-zone-buttons">
              <button className="btn-rounded danger-zone-button">
                Cancel Order
              </button>
              <button className="btn-rounded danger-zone-button report-issue">
                Report Issue
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="expand-collapse-delivery">
        <button onClick={toggleExpanded}>
          {expanded ? "Collapse" : "Expand"}
          <span>
            <FaCaretUp
              className={
                expanded ? "caret-delivery caret-expanded" : "caret-delivery"
              }
            ></FaCaretUp>
          </span>
        </button>
      </div>
    </div>
  );
};
export default DeliveryItem;
