import Banner from "@/components/Home/Banner/Banner";
import Products from "@/components/Home/Products/Products";
import Deals from "@/components/Home/Products/Deals/Deals";
import TopProducts from "@/components/Home/Products/TopProducts/TopProducts";
import Benefits from "@/components/Home/Benefits/Benefits";

function HomeView() {
  return (
    <div>
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
        <section className="top-products">
          <TopProducts></TopProducts>
        </section>
      </main>
    </div>
  );
}

export default HomeView;
