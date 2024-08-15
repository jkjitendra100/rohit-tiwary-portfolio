import "./App.css";
import React, { useEffect, useState } from "react";
import Typist from "react-typist";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";
import { GoPersonFill } from "react-icons/go";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function App() {
  return (
    <div className="min-h-[100vh] bg-[#212428]">
      <div className="">
        <Hero />
      </div>
    </div>
  );
}

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Asha Industries"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000); // Adjust this duration to match the length of the animation

    return () => clearInterval(timer);
  }, [texts.length]);

  return (
    <div>
      <div className="overflow-x-hidden overflow-y-hidden flex items-center justify-center">
        <div>
          {/* Logo */}
          <div className="mt-10">
            <img
              className="mx-auto w-40 h-40 rounded-full"
              alt="logo"
              src="https://www.ashaind.in/assets/images/asharlogo.png"
            />
          </div>

          <h1
            className="mt-10 text-center uppercase text-6xl font-serif font-bold"
            style={{
              background: "linear-gradient(to bottom, #e3ba2a, #fff, #e3ba2a)", // Gradient colors
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Asha Industries
          </h1>

          <Container maxWidth="xl" className="mt-16">
            <div className="flex gap-4 h-full items-center border-4 rounded-3xl border-primary p-4">
              <div className="flex">
                <img
                  className="w-40 h-40 border border-gray-500 rounded-3xl"
                  // src="/assets/images/rohitTiwary.jpeg"
                  src="https://www.ashaind.in/assets/images/rohit_tiwari.jpg"
                  alt="co-founded-image"
                />
              </div>
              <div className="p-[0.5px] h-40 bg-white" />

              <div className="h-full">
                <h2 className="text-primary underline font-semibold text-xl">
                  Founder Information
                </h2>
                {/* Name */}
                <div className="mt-4 flex gap-2 text-white items-center">
                  <p className="w-32 flex items-center gap-1 text-primary">
                    <GoPersonFill className="" /> Name
                  </p>
                  <p>:</p>
                  <p>Rohit Tiwary</p>
                </div>

                {/* Mobile */}
                <div className="flex gap-2 text-white items-center">
                  <p className="w-32 flex items-center gap-1 text-primary">
                    <FaMobileScreenButton className="" /> Mobile
                  </p>
                  <p>:</p>
                  <a href="tel:+918789857503">+91 8789857503</a>
                </div>

                {/* Email */}
                <div className="flex gap-2 text-white items-center">
                  <p className="w-32 flex items-center gap-1 text-primary">
                    <MdEmail className="" /> Email
                  </p>
                  <p>:</p>
                  <a href="mailto:contact@ashaind.in">contact@ashaind.in</a>
                </div>

                {/* Office Add. */}
                <div className="flex gap-2 text-white items-center">
                  <p className="w-32 flex items-center gap-1 text-primary">
                    <FaLocationDot className="" /> Office Address
                  </p>
                  <p>:</p>
                  <p>Mango, Jamshedpur, East Singhbhum, Jharkhand - 831018</p>
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className="h-[1px] bg-amber-100 bg-opacity-15 mt-10 w-[90%] mx-auto" />

      <div className="py-10 text-white">
        <Container maxWidth="xl">
          <div>
            <h1 className="text-primary text-4xl font-semibold">Our Brands</h1>
            <div className="mt-4 grid grid-cols-4 gap-4">
              <BrandsCard
                name={
                  <b>
                    Palamu<sup>TM</sup> Spices
                  </b>
                }
                slogan="(स्वाद के साथ सेहत भी)"
              />

              <BrandsCard
                name={
                  <b>
                    Asha Til Ganga Aarti<sup>TM</sup>
                  </b>
                }
                slogan="(त्वमेव सर्वम् मम् देव देव)"
              />

              <BrandsCard
                name={
                  <b>
                    Asha Til Laxmi<sup>TM</sup>
                  </b>
                }
                slogan="(त्वमेव सर्वम् मम् देव देव)"
              />

              <BrandsCard
                name={
                  <b>
                    Asha Govardhan Puja Ghee<sup>TM</sup>
                  </b>
                }
                slogan="(त्वमेव सर्वम् मम् देव देव)"
              />

              <BrandsCard
                name={
                  <b>
                    Asha Bal Gopal Puja Ghee<sup>TM</sup>
                  </b>
                }
                slogan="(त्वमेव सर्वम् मम् देव देव)"
              />

              <BrandsCard
                name={
                  <b>
                    Metro Hygienic Disinfectant Perfumed Fluid & Home Care
                    Products<sup>TM</sup>
                  </b>
                }
                slogan="(स्वच्छ भारत, स्वस्थ भारत)"
              />

              <BrandsCard
                name={
                  <b>
                    Black Panther Herbal Incense Stick<sup>TM</sup>
                  </b>
                }
                slogan="(मच्छरों का यमराज)"
              />

              <BrandsCard
                name={
                  <b>
                    Premium Dream Night Sandal & Citronella Herbal Incense Stick
                    <sup>TM</sup>
                  </b>
                }
                slogan="(मच्छरों का यमराज)"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

const BrandsCard = ({ name, slogan }) => {
  return (
    <div className="flex justify-center flex-col p-4 border-2 border-primary rounded-2xl">
      <h1 className="text-xl text-center text-primary">{name}</h1>
      <p className="text-center mt-4">{slogan}</p>
    </div>
  );
};
