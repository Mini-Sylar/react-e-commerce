import Nav from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Filters from "./components/Filters/Filters";

function App() {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <Banner></Banner>
        <Filters></Filters>
      </main>
    </div>
  );
}

export default App;
