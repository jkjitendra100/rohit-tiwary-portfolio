import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { BiCheck } from "react-icons/bi";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "@mui/material";

export default function WealthManagement() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="mt-20" id="it-services">
      <p className="bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent font-semibold">
        OUR SERVICES
      </p>
      <h1 className="pb-2 bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent inline-block xl:text-7xl text-5xl font-bold">
        Wealth Management
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
            <WealthCard
              title="Reliable Car Insurance Coverage"
              description="Drive with confidence knowing that our car insurance policies have you covered. From comprehensive coverage to protect against theft, accidents, and natural disasters, to third-party liability insurance that keeps you compliant with the law, we offer tailored plans that suit your needs. With fast claims processing and 24/7 customer support, we ensure that you're back on the road in no time. Choose us for reliable car insurance that gives you peace of mind every time you get behind the wheel."
              services={[
                "Comprehensive Coverage",
                "Third-Party Liability Insurance",
                "Collision Coverage",
                "Personal Injury Protection",
                "Uninsured Motorist Coverage",
                "Roadside Assistance",
              ]}
              imageUrl="/assets/images/web-development.webp"
              onClickNext={next}
              onClickPrevious={previous}
            />
          </div>

          <div>
            <WealthCard
              title="Secure Your Family’s Future with Life Insurance"
              description="Protect your loved ones’ financial future with our dependable life insurance plans. Whether you’re looking for term life insurance to cover specific financial obligations, whole life insurance for lifetime coverage, or a flexible universal life policy, we offer solutions that provide peace of mind. With customizable plans to fit your lifestyle and financial goals, our life insurance policies ensure that your family is taken care of, no matter what the future holds. Trust us to help you secure a legacy that lasts."
              services={[
                "Term Life Insurance",
                "Whole Life Insurance",
                "Universal Life Insurance",
                "Final Expense Insurance",
                "Accidental Death Insurance",
                "Mortgage Protection Insurance",
              ]}
              imageUrl="/assets/images/web-development.webp"
              onClickNext={next}
              onClickPrevious={previous}
            />
          </div>

          <div>
            <WealthCard
              title="Comprehensive Home Insurance for Your Peace of Mind"
              description="Your home is one of your most valuable assets—protect it with our comprehensive home insurance policies. We offer coverage for a wide range of risks, including fire, theft, natural disasters, and liability. Whether you own a house, condo, or rental property, our customizable plans provide the protection you need to safeguard your investment. With quick claims processing and reliable support, you can rest easy knowing that your home and belongings are protected. Choose our home insurance for complete coverage that gives you peace of mind."
              services={[
                "Dwelling Coverage",
                "Personal Property Protection",
                "Liability Coverage",
                "Flood Insurance",
                "Fire and Theft Protection",
                "Loss of Use Coverage",
              ]}
              imageUrl="/assets/images/web-development.webp"
              onClickNext={next}
              onClickPrevious={previous}
            />
          </div>

          <div>
            <WealthCard
              title="Comprehensive Travel Insurance for a Worry-Free Journey"
              description="Explore the world with peace of mind, knowing that our travel insurance policies have you covered. From trip cancellations to medical emergencies and lost luggage, we offer comprehensive plans that protect you from unforeseen events during your travels. Whether you're traveling for business or leisure, our insurance solutions provide quick support and easy claims processing to ensure you can enjoy your trip without worry. Trust us to safeguard your adventures wherever you go."
              services={[
                "Trip Cancellation Coverage",
                "Emergency Medical Coverage",
                "Lost Baggage Protection",
                "Travel Delay Insurance",
                "Accidental Death and Dismemberment",
                "24/7 Travel Assistance",
              ]}
              imageUrl="/assets/images/web-development.webp"
              onClickNext={next}
              onClickPrevious={previous}
            />
          </div>
          <div>
            <WealthCard
              title="Protect Your Furry Friends with Comprehensive Pet Insurance"
              description="Ensure your pet receives the best care with our comprehensive pet insurance policies. From routine check-ups to emergency treatments, our plans cover a wide range of veterinary services, giving you peace of mind knowing that your beloved companion is protected. We offer flexible plans that can be tailored to meet the specific needs of your pet, ensuring they get the care they need without putting a strain on your finances. Trust us to help you keep your furry family members healthy and happy."
              services={[
                "Accident Coverage",
                "Illness Coverage",
                "Routine Wellness Care",
                "Emergency Care",
                "Prescription Medications",
                "Chronic Condition Management",
              ]}
              imageUrl="/assets/images/web-development.webp"
              onClickNext={next}
              onClickPrevious={previous}
            />
          </div>

          <div>
            <WealthCard
              title="Comprehensive Health Insurance Solutions"
              description="As a dedicated provider of health insurance services, we safeguard your well-being with comprehensive coverage tailored to your needs. Whether you’re seeking individual health plans, family coverage, or specialized policies like critical illness or maternity care, we offer solutions that ensure peace of mind. Our commitment is to provide you with robust protection, fast claims processing, and a seamless experience. Trust us to keep you and your loved ones secure with plans that are not only affordable but also enriched with valuable benefits, empowering you to live life with confidence."
              services={[
                "Comprehensive Health Coverage",
                "Critical Illness Insurance",
                "Maternity and Newborn Care",
                "Accident and Emergency Services",
                "Preventive Care and Screenings",
                "Prescription Drug Coverage",
              ]}
              imageUrl="/assets/images/web-development.webp"
              onClickNext={next}
              onClickPrevious={previous}
            />
          </div>
        </Slider>
        {/* Buttons */}
        <div className="flex items-center justify-center mt-10 md:hidden">
          <div className="flex items-center cursor-pointer">
            <Button onClick={previous}>
              <div className="bg-white rounded z-10 border p-2 w-20 flex justify-center items-center">
                <FaLongArrowAltLeft className="text-2xl text-secondary" />
              </div>
            </Button>
          </div>
          <div className="flex items-center cursor-pointer">
            <Button onClick={next}>
              <div className="bg-white rounded z-10 border p-2 w-20 flex justify-center items-center">
                <FaLongArrowAltRight className="text-2xl text-secondary" />
              </div>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const WealthCard = ({
  onClickPrevious,
  onClickNext,
  title,
  description,
  imageUrl,
  services = [],
}) => {
  return (
    <motion.div
      className="mb-4 p-1"
      initial={{ opacity: 0.7, scale: 1, y: 80 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.01 }}
      viewport={{ once: true }}
    >
      <div className="relative md:mx-8 bg-white rounded-xl md:p-10 p-4 border border-borderColor shadow-lg shadow-shadowColor">
        <div className="md:grid md:grid-cols-2 gap-4 grid-cols-1 flex flex-col-reverse">
          {/* First col */}
          <div className="h-full">
            <h2 className="truncate-1 lg:4xl md:text-3xl sm:text-2xl text-xl font-bold bg-gradient-to-t from-primary via-rose-600 to-secondary text-transparent bg-clip-text">
              {title}
            </h2>
            <p className="truncate-4 mt-6 text-base text-rose-600 font-normal">
              {description}
            </p>

            <div className="mt-6">
              {services?.map((item, index) => (
                <div className="flex items-center gap-4" key={index}>
                  <BiCheck className="text-rose-600" />
                  <p className="truncate-1 bg-gradient-to-t from-rose-600 to-primary text-transparent bg-clip-text">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Second col */}
          <div>
            <img
              src="https://www.fsinsuresme.com/wp-content/uploads/2018/08/Insurance-Agency-vs.-Insurance-Company-Whats-the-Difference.jpg.webp"
              className="rounded"
              alt="service_image"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden md:block">
          <div className="absolute -left-10 top-0 bottom-0 flex items-center cursor-pointer">
            <Button onClick={onClickPrevious}>
              <div className="bg-white rounded z-10 border p-4 ">
                <FaLongArrowAltLeft className="text-2xl text-secondary" />
              </div>
            </Button>
          </div>
          <div className="absolute -right-10 top-0 bottom-0 flex items-center cursor-pointer">
            <Button onClick={onClickNext}>
              <div className="bg-white rounded z-10 border p-4 ">
                <FaLongArrowAltRight className="text-2xl text-secondary" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
