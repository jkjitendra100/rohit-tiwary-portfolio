import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  return (
    <div className="w-full h-[100vh] bg-red-blue-400 ">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        <div className="h-[100vh]">
          <div className="text-red-500 bg-red-400">dnsakj</div>
        </div>
        <div className="">
          <div>ffdsafadf</div>
        </div>
        <div className="">
          <div>asdasdfasdf</div>
        </div>
      </Slider>
    </div>
  );
}
