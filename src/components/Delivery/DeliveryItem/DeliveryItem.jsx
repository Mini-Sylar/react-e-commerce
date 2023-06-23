import "./DeliveryItem.css";

const DeliveryItem = ({ order }) => {
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
  return (
    <div className="sub-container delivery-item-container">
      <div className="delivery-overview">
        <div className="delivery-summary">
          <div className="delivery-order-number">
            <h2>
              Order: <span>#</span>
              {order._id.slice(0, 6)}
            </h2>
            <div className="delivery-items">
              <h4>Item Count: {order.totalItemCount}</h4>
              <h5>Total Cost: ${order.cost_after_delivery_rate}</h5>
              <h5>Delivery Type: {order.delivery_type}</h5>
            </div>
          </div>
          <div className="delivery-progress">
            <h3>Complete</h3>
            <h4>{order.percentage_complete}%</h4>
            <progress value="32" max="100"></progress>
          </div>
          <div className="delivery-date">
            <h3>Expected Completion</h3>
            <h4>{formattedDate}</h4>
            <h4>{numberOfDays} day(s)</h4>
          </div>
        </div>
      </div>
      <button>Expand</button>
    </div>
  );
};
export default DeliveryItem;
