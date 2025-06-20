import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import PNF from "./Components/Pages/PNF";
import About from "./Components/Pages/About";
import Blogs from "./Components/Pages/Blogs";
import Contact from "./Components/Pages/Contact";
import ScrollToTop from "./Components/Layout/ScrollToTop";
import Products from "./Components/Pages/Products";
import SingleProduct from "./Components/Pages/SingleProduct";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/Products" element={<Products />} />
          <Route path="/products/:name" element={<SingleProduct />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<PNF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
