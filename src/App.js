import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { SliderData } from "./components/Recommended/SliderData";
import Categories from "./components/Categories";
import Recommended from "./components/Recommended/Recommended";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Categories />
      <Recommended slides={SliderData} />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
