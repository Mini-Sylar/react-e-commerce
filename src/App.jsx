import Nav from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Filters from "./components/Filters/Filters";
import Products from "./components/Products/Products";
import Deals from "./components/Products/Deals";
import Benefits from "./components/Benefits/Benefits";

function App() {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <section className="hero-section">
          <Banner></Banner>
        </section>
        <section className="benefits-section"></section>
        {/* <section className="filters-section">
          <Filters></Filters>
        </section> */}
        <section>
          <Benefits></Benefits>
        </section>
        <section className="products-section">
          <Products></Products>
        </section>
        <section className="deals">
          <Deals></Deals>
        </section>
      </main>
    </div>
  );
}

export default App;
