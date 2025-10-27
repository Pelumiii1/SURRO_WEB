import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import StoreButtons from "./StoreButtons";

const About = () => {
  return (
    <div
      id="about"
      className="p-5 lg:p-10 my-10 flex flex-col-reverse lg:flex-row gap-5"
    >
      <div>
        <h3 className="text-[32px] lg:text-[64px] text-[#464646]">
          About Surro
        </h3>
        <p className="text-[20px] lg:text-[32px] text-[#4B4B4B] font-[400]">
          Becoming a parent is a dream, and surrogacy makes it possible for so
          many. Our platform creates a safe, trusted space where intended
          parents and surrogates meet, connect, and begin their shared journey.
          <span className="ml-1">
            With guidance and support at every step, we ensure the process is
            clear, caring and secure for everyone involved.
          </span>
        </p>
        <p className="bg-gradient-to-r from-[#012770] via-[#3651BB] to-[#6C6CD3] text-transparent bg-clip-text text-[32px]">
          Become a parent today
        </p>
        <div className="h-3 lg:h-10" />

        <StoreButtons />
      </div>
      <Image
        src="/images/pregnant-woman.png"
        alt=""
        width={500}
        height={500}
        className="lg:w-[650px] lg:h-[650px] w-[500px] h-[500px]"
        fetchPriority="high"
      />
    </div>
  );
};

export default About;
