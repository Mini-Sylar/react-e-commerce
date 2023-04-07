import Nav from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Filters from "./components/Filters/Filters";
import Products from "./components/Products/Products";

function App() {
  return (
    <div>
      <header
        style={{
          backgroundColor: "#ff8b15",
        }}
      >
        <Nav></Nav>
      </header>
      <main>
        <section
          style={{
            backgroundColor: "#ff8b15",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Banner></Banner>
        </section>
        <Filters></Filters>

        <section
          style={{
            backgroundColor: "#f9f9f9",
            padding: "1rem",
            marginBlock: "1rem",
          }}
        >
          <Products></Products>
        </section>
      </main>
    </div>
  );
}

export default App;
