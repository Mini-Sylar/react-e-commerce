import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div className="links">
      <Link to={"/"}>Deals</Link>
      <a href="#products">What's New</a>
      <Link to={"/delivery"}>Delivery</Link>
    </div>
  );
};

// replace with react router
export default Links;
