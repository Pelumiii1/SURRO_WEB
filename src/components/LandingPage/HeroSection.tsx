import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Star } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-white p-5 h-[calc(100vh-10vh)]">
      <div className="header-background  rounded-[40px] p-5 h-full">
        <div className="flex flex-col items-center justify-between h-full">
          <div className="lg:w-[580px] h-full flex flex-col items-center justify-center space-y-5">
            <h1 className="text-[32px] md:text-[72px] text-[#464646] font-normal leading-[100%] text-center">
              Bringing Dreams of Parenthood to Life.
            </h1>
            <p className="text-[#9E9E9E] text-[24px] text-center">
              We connect loving parents with caring surrogates. Because every
              family deserves a chance to grow.
            </p>
            <div className="lg:flex gap-5 items-center justify-center w-full lg:w-fit mt-5 space-y-5 lg:space-y-0">
              <Button className="bg-gradient-to-r rounded-[100px] from-[#012770] via-[#3651BB] to-[#6C6CD3] text-white h-[45px] text-[13px] font-semibold w-full">
                Find a Surrogate
              </Button>
              <Button className="border border-[#E7E7EE] rounded-[100px] h-[45px] text-[13px] font-semibold bg-transparent hover:bg-white w-full">
                <p className="bg-gradient-to-r from-[#6C6CD3] to-[#092D7B] bg-clip-text text-transparent">
                  Become a Surrogate
                </p>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-10">
            <Image
              src="/images/mother-breastfeeding.svg"
              alt=""
              width={500}
              height={500}
            />
            <Image
              src="/images/pregnant-mother.svg"
              alt=""
              width={500}
              height={500}
            />
            <Image
              src="/images/pregnant-mother-with-child.svg"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
