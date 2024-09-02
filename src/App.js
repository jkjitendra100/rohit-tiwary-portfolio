import React from "react";
import Header from "./components/global/Header";
import Hero from "./components/home/Hero";
import { Container } from "@mui/material";
import OurBrands from "./components/home/OurBrands";
import ContactUs from "./components/home/ContactUs";
import ItServices from "./components/home/ItServices";
import SocialApps from "./components/home/SocialApps";
import Footer from "./components/global/Footer";
import WealthManagement from "./components/home/WealthManagement";

export default function App() {
  // Design Reference URL: https://rainbowit.net/themes/inbio/#
  return (
    <div className="bg-white text-secondary">
      <div className="">
        <Header />
        <div className="min-h-[100vh] overflow-y-scroll">
          <Container maxWidth="xl" className="pt-20">
            <div className="">
              <Hero />
              <OurBrands />
              <WealthManagement />
              <ItServices />
              <SocialApps />
              <ContactUs />
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </div>
  );
}
