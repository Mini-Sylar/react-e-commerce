import girlHeadphones from "@/assets/images/girl_headphones.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="sub-container">
      <div className="banner">
        <div className="banner-text">
          <h1>
            Grab upto 50% off on <br></br>selected Headphones
          </h1>
          <button className="btn-rounded">Buy Now</button>
        </div>
        <div className="subject">
          <img src={girlHeadphones} alt="Girl Headphones" width={"100%"} />
        </div>
      </div>
    </div>
  );
};
export default Banner;
