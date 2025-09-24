"use client";

import { CircleCheckBig, Dot, Star } from "lucide-react";
import React from "react";
import GradientButton from "./Common/GradientButton";

const Pricing = () => {
  const [active, setActive] = React.useState(0);

  return (
    <div className="p-5 lg:p-10 my-[2rem]">
      <h1 className="text-[48px] font-[400] text-[#464646] leading-[120%] lg:text-center">
        An investment for your dream child
      </h1>
      <p className="text-[#9E9E9E] text-[16px] lg:text-[24px] text-left lg:text-center lg:w-[30%] lg:mx-auto">
        We understand that this isn’t just a service, it’s your future family
      </p>

      <div className="grid lg:grid-cols-3 gap-5 mt-5 items-center">
        {/* Starter plan */}
        <div className="bg-[#FBF8FD] rounded-[30px] p-[20px] lg:p-[30px] h-fit">
          <div className="text-[#080833] text-[16px] bg-gradient-to-r from-[#CDCDFB] to-[#F5DDFF] w-fit rounded-[14px] py-3 px-5">
            Starter Plan
          </div>
          <p className="my-2 text-[#5E5E8D] text-[13px] lg:text-[16px]">
            For mothers just beginning the journey
          </p>
          <p className="text-[#080833] text-[32px] lg:text-[64px] font-[500]">
            $499/year
          </p>

          <div className="space-y-[10px] mt-3 mb-[5rem] lg:mb-[7rem]">
            {[
              "Verified surrogate profiles",
              "Basic profile creation and listing",
              "3 monthly surrogate matches",
              "Secure in-platform messaging",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CircleCheckBig className="text-[#5E5E8D]" />
                <span className="text-[#5E5E8D] text-[16px] lg:text-[20px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <GradientButton text="Begin with Starter" />
        </div>

        {/* Premium Plan */}
        <div className="bg-gradient-to-r from-[#CDCDFB] via-100% via-[#F5DDFF] rounded-[30px] p-[20px] lg:p-[30px] h-fit relative">
          <div className="flex justify-between gap-5 items-center">
            <div className="text-[#080833] text-[16px] bg-white w-fit rounded-[14px] py-3 px-5">
              VIP Plan
            </div>
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#FCDF78] rounded-bl-[30px] flex items-center gap-[5px] absolute top-0 right-0 rounded-tr-[30px] p-[20px]">
              <p className="text-[#945016] text-[16px]">Most Popular</p>
              <CircleCheckBig className="text-[#C56A1D]" />
            </div>
          </div>

          <p className="my-2 text-[#5E5E8D] text-[13px] lg:text-[16px]">
            For mothers ready to move faster with full support
          </p>
          <p className="text-[#080833] text-[32px] lg:text-[64px] font-[500]">
            $999/year
          </p>

          <div className="space-y-[10px] mt-3 mb-[5rem] lg:mb-[10rem]">
            {[
              "Unlimited surrogate matches",
              "Featured profile placement for visibility",
              "Priority matching with top surrogates",
              "Dedicated matching advisor",
              "Access to premium resources and guides",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CircleCheckBig className="text-[#5E5E8D]" />
                <span className="text-[#5E5E8D] text-[16px] lg:text-[20px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <GradientButton text="Go premium" />
        </div>

        {/* VIP plan  */}
        <div className="bg-[#FBF8FD] rounded-[30px] p-[20px] lg:p-[30px] h-fit relative">
          <div className="text-[#080833] text-[16px] bg-gradient-to-r from-[#CDCDFB] to-[#F5DDFF] w-fit rounded-[14px] py-3 px-5">
            VIP Plan
          </div>
          <p className="my-2 text-[#5E5E8D] text-[13px] lg:text-[16px]">
            For mothers who want the smoothest, fastest, and most supported path
            to motherhood
          </p>
          <p className="text-[#080833] text-[32px] lg:text-[64px] font-[500]">
            $1,999/year
          </p>

          <div className="space-y-[10px] mt-3 mb-[5rem] lg:mb-[10rem]">
            {[
              "First access to the most compatible surrogates",
              "One on one guidance throughout your journey",
              "Exclusive community access and support groups",
              "Monthly check-ins with out expert advisors",
              "Access to legal and medical resource partners",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CircleCheckBig className="text-[#5E5E8D]" />
                <span className="text-[#5E5E8D] text-[16px] lg:text-[20px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <GradientButton text="Choose VIP Experience" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
