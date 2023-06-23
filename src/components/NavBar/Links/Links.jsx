import { Link, useLocation } from "react-router-dom";
const Links = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToProducts = () => {
    if (!isHomePage) return;
    const products = document.getElementById("products");
    products.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="links">
      <Link to={"/"}>Deals</Link>
      <Link to={"/#products"} onClick={scrollToProducts}>
        What's New
      </Link>
      <Link to={"/delivery"}>Delivery</Link>
    </div>
  );
};

// replace with react router
export default Links;
