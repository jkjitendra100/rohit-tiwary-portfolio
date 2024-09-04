import React from "react";
import Header from "./components/global/Header";
import { Container } from "@mui/material";
import Footer from "./components/global/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BrandDetails from "./pages/BrandDetails";

export default function App() {
  // Design Reference URL: https://rainbowit.net/themes/inbio/#
  return (
    <div className="bg-white text-secondary">
      <BrowserRouter>
        <div className="">
          <Header />
          <div className="min-h-[100vh] overflow-y-scroll">
            <Container maxWidth="xl" className="pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/brandDetails" element={<BrandDetails />} />
              </Routes>
            </Container>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
