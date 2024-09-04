import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { brandsList } from "../jsonFiles/brandsList";
import { Container } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";

export default function BrandDetails() {
  const location = useLocation();
  const { brandId } = location?.state;
  const [brandDetails, setBrandDetails] = useState("");
  console.log(brandId);

  useEffect(() => {
    setBrandDetails(brandsList?.find((e) => e?._id === brandId));
  }, []);

  console.log(brandDetails);

  return (
    <div>
      <Container maxWidth="lg">
        <div className="p-2 md:p-4 bg-white rounded-xl shadow shadow-shadowColor border border-borderColor">
          <div className="">
            <img
              src={brandDetails?.brandLogo}
              className="w-full rounded-xl"
              alt="brand-logo"
            />
          </div>

          <div className="lg:mt-10 mt-6">
            <h2 className="text-transparent bg-gradient-to-tr from-primary to-rose-600 bg-clip-text lg:text-4xl md:text-3xl sm:md:text-2xl sm:text-xl text-lg text-xl font-semibold">
              {brandDetails?.brandName}
            </h2>

            <h2 className="mt-2 text-transparent bg-gradient-to-tr from-primary via-rose-600 to-secondary bg-clip-text md:md:text-2xl sm:text-xl text-lg sm:text-xl text-lg font-semibold">
              {brandDetails?.slogan}
            </h2>

            <div className="text-secondary">
              {/* Overview */}
              <div className="lg:mt-10 mt-6">
                <p className="font-bold md:text-2xl sm:text-xl text-lg text-secondaryDark">
                  Overview:
                </p>
                <p className="mt-2 pl-4">
                  <b>{brandDetails?.brandName}</b> is a leading name in the Asha
                  industry, known for its commitment to quality, innovation, and
                  customer satisfaction. With a rich history of{" "}
                  {new Date()?.getFullYear() - brandDetails?.stabilizedYear}{" "}
                  years, <b>{brandDetails?.brandName}</b> has consistently
                  delivered products that cater to the needs of million
                  customers.
                </p>
              </div>

              {/* Key Features */}
              <div className="lg:mt-10 mt-6">
                <p className="font-bold md:text-2xl sm:text-xl text-lg text-secondaryDark">
                  Key Features:
                </p>
                <div className="mt-2">
                  <ul className="list-inside list-disc">
                    <li className="pl-4 mt-2">
                      <b>{brandDetails?.brandName}</b> ensures that each product
                      is made with the highest quality materials.
                    </li>
                    <li className="pl-4 mt-2">
                      The brand continually invests in research and development
                      to bring the latest technology to its products.
                    </li>
                    <li className="pl-4 mt-2">
                      <b>{brandDetails?.brandName}</b> is committed to
                      sustainable practices, ensuring that their products are
                      environmentally friendly.
                    </li>
                    <li className="pl-4 mt-2">
                      Exceptional customer service is at the heart of{" "}
                      <b>{brandDetails?.brandName}</b>, providing support before
                      and after purchase.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Why Choose */}
              <div className="lg:mt-10 mt-6">
                <p className="font-bold md:text-2xl sm:text-xl text-lg text-secondaryDark">
                  Why Choose:
                </p>
                <p className="mt-2 pl-4">
                  <b>{brandDetails?.brandName}</b> stands out in the market
                  because of its dedication under Asha Industries. Whether it’s
                  high quality and valuable services, customers choose
                  {brandDetails?.brandName} for its reliability and performance.
                </p>
              </div>

              {/* Where to Buy */}
              {/* <div>
              <p className="font-bold md:text-2xl sm:text-xl text-lg text-secondaryDark">Where to Buy:</p>
              <p className="mt-2 pl-4">
                <b>{brandDetails?.brandName}</b>? <b>{brandDetails?.brandName}</b> stands out in the market because of
                its dedication to [unique selling points]. Whether it’s
                [specific feature] or [another feature], customers choose [Brand
                Name] for its reliability and performance.
              </p>
            </div> */}

              {/* Contact Information */}
              <div className="lg:mt-10 mt-6">
                <p className="font-bold md:text-2xl sm:text-xl text-lg text-secondaryDark">
                  Contact Information:
                </p>
                <div className="mt-2 pl-4">
                  <div className="flex items-center gap-2">
                    <MdEmail />
                    <a href="mailto:contact@ashaind.in" rel="noreferrer">
                      contact@ashaind.in
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaMobileScreenButton />
                    <a href="tel:+918789857503" rel="noreferrer">
                      +91 8789857503
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
