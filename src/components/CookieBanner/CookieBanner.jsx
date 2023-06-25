import { toast } from "react-toastify";

const CookieBanner = () => {
  const handleIframeLoad = (event) => {
    const iframeDocument = event.target.contentDocument;

    if (iframeDocument && iframeDocument.requestStorageAccess) {
      iframeDocument
        .requestStorageAccess()
        .then(function (access) {
          document
            .hasStorageAccess()
            .then(() => {
              toast.success("Storage access granted!");
            })
            .catch(() => {
              toast.error("Storage access declined");
            });
        })
        .catch(function (error) {
          toast.error("No Request API")
          console.log("Error requesting storage access:", error);
        });
    }
  };

  return (
    <div>
      <iframe
        title="Third-Party Content"
        src={import.meta.env.VITE_API_URL}
        onLoad={handleIframeLoad}
      ></iframe>
    </div>
  );
};
export default CookieBanner;
