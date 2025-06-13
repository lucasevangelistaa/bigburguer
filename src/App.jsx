import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import FloatingCart from "./components/FloatingCart";
import BottomNav from "./components/BottomNav";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import { Element } from "react-scroll";
import SideCart from "./components/SideCart";

function App() {
  return (
    <>
      <Header />
      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="menu">
        <Menu />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <BottomNav />
      <SideCart />
      <Footer />
    </>
  );
}

export default App;
