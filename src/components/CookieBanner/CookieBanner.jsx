import { toast } from "react-toastify";

const CookieBanner = () => {
  const makeRequestWithUserGesture = async () => {
    document.requestStorageAccess().then(
      () => {
        toast.success("access granted")
        console.log("access granted");
      },
      () => {
        toast.error("Access Denied")
        console.log("access denied");
      }
    );
  };
  return (
    <div>
      <div className="cookie-banner">
        <div className="cookie-banner__content">
          <p>
            We use cookies to improve your experience on our website. By
            browsing this website, you agree to our use of cookies.
          </p>
          <button
            className="btn-rounded btn--primary"
            onClick={makeRequestWithUserGesture}
          >
            Accept
          </button>
          <button className="btn-rounded btn--text">Decline</button>
        </div>
      </div>
    </div>
  );
};
export default CookieBanner;
