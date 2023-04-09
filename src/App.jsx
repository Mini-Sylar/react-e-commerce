import HomeView from "./views/HomeView";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "@/components/NavBar/NavBar";
import ShopFooter from "@/components/Footer/ShopFooter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
]);

function App() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <RouterProvider router={router} />
      <footer>
        <ShopFooter></ShopFooter>
      </footer>
    </div>
  );
}

export default App;
