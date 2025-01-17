import React from "react";
import BookingMenu from "./BookingMenu";
import CountElement from "./CountElement";
import TestimonialSlider from "./Testinomials";
import Speciality from "./Speciality";
import AccommodationList from "./Accomodation";

// const SnowflakeAnimation = React.lazy(() => import("./SnowFlakeAnimation"));

export default function HeroSection() {
  return (
    <div className="">
        {/* <SnowflakeAnimation />
        <BookingMenu />
        <CountElement />
        <Speciality /> */}
      <div className="mt-8">
        <AccommodationList />
      </div>
        {/* <TestimonialSlider /> */}
    </div>
  );
}
