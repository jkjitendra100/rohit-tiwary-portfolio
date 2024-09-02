import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="flex items-center"
      id="portfolio"
      initial={{ opacity: 0, scale: 1, y: 0 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="md:grid grid-cols-6 gap-4">
        {/* First col */}
        <div className="col-span-4">
          <p className="text-lg text-center md:text-left font-semibold bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
            Welcome to my world
          </p>
          <h1 className="text-center md:text-left lg:text-6xl sm:text-5xl text-4xl mt-4 font-bold bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
            <b className="font-bold bg-gradient-to-t from-primary via-rose-600 to-secondaryDark bg-clip-text text-transparent">
              Meet
            </b>{" "}
            <b className="font-bold bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
              Rohit Tiwary,{" "}
            </b>
            <b className="font-bold bg-gradient-to-t from-primary via-rose-600 to-secondaryDark bg-clip-text text-transparent">
              Founder &
            </b>{" "}
            <b className="font-bold bg-gradient-to-t from-primary via-rose-600 to-secondaryDark bg-clip-text text-transparent">
              CEO of
            </b>{" "}
            <b className="font-bold bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
              Asha Industries
            </b>
          </h1>

          {/* Follow me */}
          <div className="md:mt-20 mt-12 text-center md:text-left ">
            <p className="bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent font-semibold text-lg">
              Follow me
            </p>

            <div className="mt-4 flex gap-4 flex-wrap h-[58px] items-end justify-center md:justify-start">
              <a
                href="https://www.instagram.com/rohittiwary309/"
                target="_blank"
                rel="noreferrer"
              >
                <FaSquareInstagram className="p-2 w-12 h-12 hover:mb-2 duration-500 bg-gradient-to-b from-primary via-rose-600 to-secondary rounded-lg shadow-md shadow-black/50 cursor-pointer text-white bg-primary hover:bg-secondary" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61565404732129"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="p-2 w-12 h-12 hover:mb-2 duration-500 bg-gradient-to-b from-primary via-rose-600 to-secondary rounded-lg shadow-md shadow-black/50 cursor-pointer text-white bg-primary hover:bg-secondary" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="p-2 w-12 h-12 hover:mb-2 duration-500 bg-gradient-to-b from-primary via-rose-600 to-secondary rounded-lg shadow-md shadow-black/50 cursor-pointer text-white bg-primary hover:bg-secondary" />
              </a>
              <a
                href="https://x.com/rohittiwary309"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitterX className="p-2 w-12 h-12 hover:mb-2 duration-500 bg-gradient-to-b from-primary via-rose-600 to-secondary rounded-lg shadow-md shadow-black/50 cursor-pointer text-white bg-primary hover:bg-secondary" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaYoutube className="p-2 w-12 h-12 hover:mb-2 duration-500 bg-gradient-to-b from-primary via-rose-600 to-secondary rounded-lg shadow-md shadow-black/50 cursor-pointer text-white bg-primary hover:bg-secondary" />
              </a>
            </div>
          </div>
        </div>

        {/* Second col */}
        <div className="col-span-2 mt-24 md:mt-0">
          <div className="bg-gradient-to-tr from-secondary via-rose-600 to-primary shadow-sm border-t border-primaryLight shadow-secondary rounded-xl p-4 pb-0">
            <img
              className="h-fit mx-auto"
              src="/assets/images/rohit-tiwary-hero.webp"
              alt="self-img"
            />
          </div>
        </div>
      </div>
      <div className="p-[1px] my-20 bg-black/30" />
    </motion.div>
  );
}
