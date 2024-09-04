import { Container } from "@mui/material";
import React from "react";
import Hero from "../components/home/Hero";
import OurBrands from "../components/home/OurBrands";
import WealthManagement from "../components/home/WealthManagement";
import ItServices from "../components/home/ItServices";
import SocialApps from "../components/home/SocialApps";
import ContactUs from "../components/home/ContactUs";

export default function Home() {
  return (
    <div>
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
  );
}
