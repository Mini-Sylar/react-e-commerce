import HomeView from "./views/HomeView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "@/components/NavBar/NavBar";
import ShopFooter from "@/components/Footer/ShopFooter";
import ErrorView from "./views/ErrorView";
import CartView from "./views/CartView";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar></NavBar>
        </header>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <ShopFooter></ShopFooter>
      </footer>
    </div>
  );
}

export default App;
