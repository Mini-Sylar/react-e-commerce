import { Outlet, Link } from "react-router-dom";
const Links = () => {
  return (
    <div className="links">
      <Link to={"/"}>Deals</Link>
      <a href="#">What's New</a>
      <a href="#">Delivery</a>
    </div>
  );
};

// replace with react router
export default Links;
