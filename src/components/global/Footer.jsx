import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOurBrands = () => {
    const element = document.getElementById("our-brands");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToItServices = () => {
    const element = document.getElementById("it-services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSocialServices = () => {
    const element = document.getElementById("social-services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContactUs = () => {
    const element = document.getElementById("contact-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      className="mt-10 p-10 bg-gradient-to-tr from-secondary via-rose-900 to-primary border-t border-borderColor py-12 text-white"
      initial={{ opacity: 0.5, scale: 1, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="leading-relaxed">
            At <b>Asha Industries</b>, we offer daily essentials and IT services
            like website development, graphic design, video editing, and logo
            creation, helping businesses grow with quality products and digital
            solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={scrollToPortfolio}
                className="hover:text-white transition-colors duration-300"
              >
                Portfolio
              </button>
            </li>

            <li>
              <button
                onClick={scrollToOurBrands}
                className="hover:text-white transition-colors duration-300"
              >
                Our Brands
              </button>
            </li>

            <li>
              <button
                onClick={scrollToItServices}
                className="hover:text-white transition-colors duration-300"
              >
                IT Services
              </button>
            </li>

            <li>
              <button
                onClick={scrollToSocialServices}
                className="hover:text-white transition-colors duration-300"
              >
                Social Services
              </button>
            </li>

            <li>
              <button
                onClick={scrollToContactUs}
                className="hover:text-white transition-colors duration-300"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <p className="mb-4">
            Stay connected with us through social platforms for the latest
            updates and news.
          </p>
          <div className="flex space-x-4">
            <div className="mt-4 flex gap-4 flex-wrap h-[58px] items-end">
              <a
                href="https://www.instagram.com/rohittiwary309/"
                target="_blank"
                rel="noreferrer"
              >
                <FaSquareInstagram className="p-2 w-12 h-12 hover:mb-2 duration-500 bg-gradient-to-b from-primary via-rose-600 to-secondary rounded-lg shadow-md shadow-black/50 cursor-pointer text-white bg-primary hover:bg-secondary border-2 border-white" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61565404732129"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="p-2 w-12 h-12 hover:mb-2 duration-500 bg-gradient-to-b from-primary via-rose-600 to-secondary rounded-lg shadow-md shadow-black/50 cursor-pointer text-white bg-primary hover:bg-secondary border-2 border-white" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="p-2 w-12 h-12 hover:mb-2 duration-500 bg-gradient-to-b from-primary via-rose-600 to-secondary rounded-lg shadow-md shadow-black/50 cursor-pointer text-white bg-primary hover:bg-secondary border-2 border-white" />
              </a>
              <a
                href="https://x.com/rohittiwary309"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitterX className="p-2 w-12 h-12 hover:mb-2 duration-500 bg-gradient-to-b from-primary via-rose-600 to-secondary rounded-lg shadow-md shadow-black/50 cursor-pointer text-white bg-primary hover:bg-secondary border-2 border-white" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaYoutube className="p-2 w-12 h-12 hover:mb-2 duration-500 bg-gradient-to-b from-primary via-rose-600 to-secondary rounded-lg shadow-md shadow-black/50 cursor-pointer text-white bg-primary hover:bg-secondary border-2 border-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-borderColor pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Asha Industries. All Rights Reserved.
      </div>
    </motion.footer>
  );
}
