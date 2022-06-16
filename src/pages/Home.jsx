import Announce from "../components/Announce";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Sildes from "../components/Sildes";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return <div>
      <Navbar/>
      <Sildes />
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
  </div>;
};

export default Home;
