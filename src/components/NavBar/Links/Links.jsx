import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div className="links">
      <Link to={"/"}>Deals</Link>
      <Link to={"/#products"}>What's New</Link>
      <Link to={"/delivery"}>Delivery</Link>
    </div>
  );
};

// replace with react router
export default Links;
