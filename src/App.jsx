import { useEffect, useRef } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Home from "./components/Home";
import LocomotiveScroll from "locomotive-scroll";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const container = useRef();
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: container.current,
      smooth: true,
      multiplier: 1,
    });
  }, [container]);

  return (
    <div
      ref={container}
      className="main overflow-hidden selection:text-bg selection:bg-zinc-950 bg-bg "
    >
      <Header />
      <Home />
      <Cards />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
