import React from "react";
import { IoIosHeart } from "react-icons/io";
import { motion } from "framer-motion";

export default function OurBrands() {
  return (
    <div className="mt-20 sm:mt-10" id="our-brands">
      <p className="bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent font-semibold">
        FEATURES
      </p>
      <h1 className="bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent inline-block xl:text-7xl text-5xl font-bold">
        Our Brands
      </h1>
      <div className="flex items-center justify-center">
        <motion.div
          className="p-4 rounded-full"
          initial={{ opacity: 0, scale: 2, y: 0 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            className="w-60 h-60 rounded-3xl mx-auto p-4"
            alt="logo"
            src="/assets/svg/asha-ind-logo.svg"
          />
        </motion.div>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center flex-wrap">
        <OurBrandCard
          brandName="Premium Dream Night Sandal & Citronella Herbal Incense Stick"
          slogan="मच्छरों का यमराज"
          stablisedYear={1998}
          likes={489}
          brandLogo="/assets/images/dreamNightBanner.webp"
        />

        <OurBrandCard
          brandName="Black Panther Herbal Incense Stick"
          slogan="मच्छरों का यमराज"
          stablisedYear={1998}
          likes={489}
          brandLogo="/assets/images/blackPantherBanner.webp"
        />

        <OurBrandCard
          brandName={
            <p className="">
              Metro Hygienic Disinfectant Perfumed Fluid & Home Care Products
              (स्वच्छ भारत, स्वस्थ भारत)
            </p>
          }
          stablisedYear={1998}
          likes={489}
          brandLogo="/assets/images/metroHygenicBanner.webp"
        />

        <OurBrandCard
          brandName={<p className="">Palamu Spices (स्वाद के साथ सेहत भी)</p>}
          stablisedYear={1998}
          likes={489}
          brandLogo="/assets/images/plamuSpicesBanner.webp"
        />

        <OurBrandCard
          brandName={<p>Khadakpur Masala</p>}
          stablisedYear={2007}
          likes={378}
          brandLogo="/assets/images/kharagpur-masala-banner.webp"
        />

        <OurBrandCard
          brandName={
            <p className="">
              Asha Bal Gopal Puja Ghee (त्वमेव सर्वम् मम् देव देव)
            </p>
          }
          stablisedYear={1998}
          likes={489}
          brandLogo="/assets/images/bal-gopal-ghee-banner.webp"
        />

        <OurBrandCard
          brandName={
            <p className="">
              Asha Govardhan Puja Ghee (त्वमेव सर्वम् मम् देव देव)
            </p>
          }
          stablisedYear={1998}
          likes={489}
          brandLogo="/assets/images/goverdhan-ghee-banner.webp"
        />

        <OurBrandCard
          brandName={
            <p className="">Asha Til Ganga Arti (त्वमेव सर्वम् मम् देव देव)</p>
          }
          stablisedYear={1998}
          likes={489}
          brandLogo="/assets/images/til-ganga-aarti.webp"
        />

        <OurBrandCard
          brandName={
            <p className="">Asha Til Laxmi (त्वमेव सर्वम् मम् देव देव)</p>
          }
          stablisedYear={1998}
          likes={489}
          brandLogo="/assets/images/til-laxmi.webp"
        />
      </div>
    </div>
  );
}

const OurBrandCard = ({
  stablisedYear,
  likes,
  brandName,
  slogan,
  brandLogo,
  imageStyle = "object-fill",
}) => {
  return (
    <motion.div
      className="p-6 group cursor-pointer bg-white rounded-xl border-t border-borderColor shadow-lg shadow-shadowColor hover:bg-gradient-to-tr from-secondary via-rose-600 to-primary hover:text-white hover:shadow-shadowColor hover:shadow-xl duration-500 animate-gradient-move"
      initial={{ opacity: 0.7, scale: 1, y: 80 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.01 }}
      viewport={{ once: true }}
    >
      <div className="cursor-pointer">
        <div className="overflow-hidden rounded-xl w-full h[200px]">
          <img
            className={`w-full h[200px] rounded-xl hover:scale-105 duration-700 border-2 border-white ${imageStyle}`}
            alt="logo"
            src={brandLogo}
          />
        </div>

        <div className="text-primary group-hover:text-white">
          {/* Apply group-hover here */}
          <div className="mt-4 flex items-center justify-between text-secondary group-hover:text-white">
            <p className="font-semibold">Since {stablisedYear}</p>
            {/* Removed individual hover:text-white */}
            <p className="text-secondary font-semibold flex items-center gap-2 group-hover:text-white">
              {/* Added group-hover */}
              <IoIosHeart /> {likes}
            </p>
          </div>
          <div className="flex items-center">
            <h2 className="mt-6 text-xl truncate-1 cursor-pointer font-semibold leading-8 duration-500 group-hover:text-white bg-gradient-to-t from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
              {brandName}
            </h2>
            <h2 className="mt-6 text-xl truncate-1 cursor-pointer font-semibold leading-8 duration-500 group-hover:text-white bg-gradient-to-t from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
              {slogan}
            </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
