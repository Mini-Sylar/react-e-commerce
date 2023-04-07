import Nav from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Filters from "./components/Filters/Filters";
import Products from "./components/Products/Products";

function App() {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <Banner></Banner>
        <Filters></Filters>
        <Products></Products>
      </main>
    </div>
  );
}

export default App;
