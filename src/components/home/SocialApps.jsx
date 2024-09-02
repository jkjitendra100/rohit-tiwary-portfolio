import React, { useRef } from "react";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function SocialApps() {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="mt-20" id="social-services">
      <p className="bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent font-semibold">
        SOCIAL PLATFORM
      </p>
      <h1 className="bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent inline-block xl:text-7xl text-5xl font-bold">
        Social Apps
      </h1>
      <motion.div
        className="xl:mt-16 lg:mt-12 sm:mt-8 mt-6"
        initial={{ opacity: 0.5, scale: 1, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          dots={true}
          infinite={true}
          speed={700}
          autoplay
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          autoplaySpeed={2000}
        >
          <div>
            <ItServiceCard
              name="Dating App"
              description="Maittri is a dating application designed to help you find and connect with your ideal partner. It offers a unique platform where you can not only meet potential matches but also take the time to get to know them on a deeper level. Whether you’re looking to arrange a date or seeking a meaningful relationship that could lead to a lifelong commitment, Maittri provides the tools and environment to explore these possibilities. Our mission is to bring two individuals together, fostering a connection that goes beyond just casual dating, ultimately helping you consider each other as life partners."
              title="Maittri App"
              imageUrl="/assets/svg/maittri-icon.svg"
              since="2008"
              onClickNext={next}
              onClickPrevious={previous}
            />
          </div>

          <div>
            <ItServiceCard
              name="Health Care Services"
              description="Medsarthi is a comprehensive healthcare platform dedicated to connecting you with top-tier medical professionals, including the best doctors, hospitals, and healthcare facilities. Our mission is to ensure that you receive the highest quality care, whether you’re seeking specialized treatment or general healthcare services. In addition to providing access to leading medical experts, Medsarthi offers affordable doctor consultations, making quality healthcare more accessible to everyone. Our platform is designed to cater to your health needs efficiently, ensuring that you can find the right care at the right time, all at a minimal cost to our patients."
              title="Med Sarthi App"
              imageUrl="/assets/svg/med-sarthi-icon.svg"
              since="2006"
              onClickNext={next}
              onClickPrevious={previous}
            />
          </div>
        </Slider>
      </motion.div>
    </div>
  );
}

const ItServiceCard = ({
  onClickPrevious,
  onClickNext,
  title,
  description,
  imageUrl,
  name,
  since,
}) => {
  return (
    <motion.div
      className="mb-4 p-1"
      initial={{ opacity: 0.5, scale: 1, y: 80 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.01 }}
      viewport={{ once: true }}
    >
      <div className="lg:grid grid-cols-6 gap-6">
        {/* First col */}
        <div className="xl:p-10 p-6 sm:flex gap-6 lg:block rounded-xl col-span-2 bg-white text-secondary shadow-lg shadow-shadowColor duration-500 border border-t border-borderColor">
          <div className="flex items-center justify-center">
            <div className="w-fit xl:h-[250px] lg:h-[200px] sm:h-[100px] object-fill overflow-hidden">
              <img
                className="w-full h-full rounded-xl object-fill"
                src={imageUrl}
                alt="service_image"
              />
            </div>
          </div>
          <div className="p-4 flex w-full items-end justify-between text-secondary">
            <div className="w-full">
              <p className="">{name}</p>
              <div className="flex items-center justify-between">
                <h2 className="md:text-2xl sm:text-xl text-lg font-bold">
                  Since {since}
                </h2>
                <img
                  className="lg:h-5 sm:h-10 h-8 rounded cursor-pointer"
                  src="/assets/images/play-store-app.webp"
                  alt="playStore_url"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second col */}
        <div className="col-span-4 flex flex-col justify-between">
          {/* Arrow Design */}
          <div className="hidden lg:block">
            <div className="flex justify-between ">
              <h1 className="text-9xl bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
                🙷
              </h1>

              <div className="flex items-center gap-2">
                <IoArrowBackOutline
                  className="w-16 h-16 p-4 rounded text-white bg-gradient-to-b from-primary via-rose-600 to-secondary shadow-lg shadow-shadowColor border-t border-borderColor hover:bg-secondaryDark duration-500 cursor-pointer"
                  onClick={onClickPrevious}
                />
                <IoArrowForward
                  className="w-16 h-16 p-4 rounded text-white bg-gradient-to-b from-primary via-rose-600 to-secondary shadow-lg shadow-shadowColor border-t border-borderColor hover:bg-secondaryDark duration-500 cursor-pointer"
                  onClick={onClickNext}
                />
              </div>
            </div>
          </div>

          <div className="xl:p-10 p-6 mt-4 lg:mt-0 rounded-xl col-span-2 bg-white text-secondary duration-500 border shadow-lg shadow-shadowColor border-borderColor">
            <h3 className="flex items-center gap-6 justify-between md:text-4xl sm:text-3xl text-2xl font-bold">
              {title}
            </h3>
            <div className="p-[1px] bg-black/50 my-6" />
            <p className="font-semibold truncate-3">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
