import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Layout/Pages/Home";
import Contact from "./Layout/Pages/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
