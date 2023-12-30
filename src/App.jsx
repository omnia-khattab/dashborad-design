import React from "react";
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home";
import NotFound from './components/NotFound/NotFound';
//import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import OurService from "./components/OurService/OurService";

import "./App.scss";
import { ProductsProvider } from "./context/store";
import { HelmetProvider } from "react-helmet-async";

function App() {

  return (
    <>
    <HelmetProvider>
      <ProductsProvider>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="about-us" element={<AboutUs/>}/>
            <Route path="contact-us" element={<ContactUs/>}/>
            <Route path="our-services" element={<OurService/>}/>

            <Route path="*" element={<NotFound />} />
          </Routes>
          {/*<Footer/>*/}
      </ProductsProvider> 
    </HelmetProvider>
    </>
  )
}

export default App
