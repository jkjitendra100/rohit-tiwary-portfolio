import React, { useRef } from "react";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function ItServices() {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="mt-20" id="it-services">
      {/* <p className="bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent font-semibold">
        OUR SERVICES
      </p> */}
      <h1 className="bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent inline-block xl:text-7xl text-5xl font-bold">
        IT Services
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
          autoplay
          speed={700}
          slidesToShow={2}
          slidesToScroll={1}
          arrows={false}
          autoplaySpeed={2000}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
          ]}
        >
          <div>
            <ItServiceCard
              name="Jitendra Kumar"
              description="As a passionate and skilled website developer, we bring your digital visions to life with cutting-edge designs and seamless functionality. Whether you need a responsive e-commerce platform, a dynamic corporate website, or a personal blog, We ensure your online presence stands out. With a focus on user experience and performance, We create websites that are not only visually stunning but also fast, secure, and optimized for search engines. Partner with us to build a website that elevates your brand and drives results."
              title="Website Development"
              imageUrl="/assets/images/web-development.webp"
              experience="5"
              onClickNext={next}
              onClickPrevious={previous}
            />
          </div>

          <div>
            <ItServiceCard
              name="Jitendra Kumar"
              description="In the rapidly evolving world of technology, having a robust mobile application is crucial for business success. We specialize in developing high-performance mobile apps that provide an intuitive user experience across all platforms. Whether it's iOS, Android, or cross-platform development, We create apps that are feature-rich, scalable, and tailored to meet your specific needs. From concept to launch, We work closely with you to develop an app that engages users and enhances your brand's digital footprint."
              title="Mobile App Development"
              imageUrl="/assets/images/app-development.webp"
              experience="4"
              onClickNext={next}
              onClickPrevious={previous}
            />
          </div>

          <div>
            <ItServiceCard
              name="Kush Kumar Chakram"
              description="In a world where video content reigns supreme, having high-quality video editing can set you apart from the competition. We offer professional video editing services that turn raw footage into polished, engaging content. Whether you need promotional videos, corporate presentations, social media clips, or cinematic montages, We bring your vision to life with precision and creativity. With a focus on storytelling and visual appeal, We ensure your videos not only captivate but also convey your message effectively, helping you connect with your audience on a deeper level."
              title="Video Editing"
              imageUrl="/assets/images/video-editor.webp"
              experience="5"
              onClickNext={next}
              onClickPrevious={previous}
            />
          </div>

          <div>
            <ItServiceCard
              name="Kush Kumar Chakram"
              description="Graphic design is the art of visual storytelling, and We am here to help you tell your brand's story in the most compelling way. With a keen eye for detail and a passion for creativity, We design logos, brochures, banners, social media graphics, and more that resonate with your target audience. Our designs are not just aesthetically pleasing but are strategically crafted to communicate your brand's message effectively. Let's work together to create visuals that leave a lasting impression and make your brand unforgettable."
              title="Graphics Designing"
              imageUrl="/assets/images/graphics-designer.webp"
              experience="5"
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
  experience,
}) => {
  return (
    <motion.div
      className="mb-4 p-1"
      initial={{ opacity: 0.7, scale: 1, y: 80 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.01 }}
      viewport={{ once: true }}
    >
      <div className="">
        {/* First col */}
        <div className="xl:p-10 p-6 gap-6 rounded-xl bg-white text-secondary shadow-lg shadow-shadowColor duration-500 border border-t border-borderColor">
          <div className="w-fit object-fill overflow-hidden">
            <img
              className="w-full h-full rounded-xl object-fill border border-borderColor"
              src={imageUrl}
              alt="service_image"
            />
          </div>
          <div className="mt-4">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold truncate-1">
              {title}
            </p>
            <h2 className="text-base truncate-4">{description}</h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
