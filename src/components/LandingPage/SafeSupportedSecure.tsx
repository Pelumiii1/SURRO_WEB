import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const SafeSupportedSecure = () => {
  return (
    <div className="bg-[#FBF8FC] rounded-[40px] m-2 lg:m-10 my-[2rem] relative h-[955px] lg:h-[610px]">
      <Image
        src={"/vector/vector1.svg"}
        alt=""
        width={100}
        height={100}
        fetchPriority="high"
        className="w-full h-full hidden lg:block"
      />
      <Image
        src={"/vector/vector2.svg"}
        alt=""
        width={100}
        height={100}
        fetchPriority="high"
        className="w-full h-full block lg:hidden"
      />
      <div className="absolute top-0 left-0 w-full h-full p-5 lg:p-10">
        <div className="lg:w-[680px]">
          <h1 className="text-[#464646] text-[32px] lg:text-[64px]">
            Safe. Supported. Secured
          </h1>
          <p className="text-[#9E9E9E] text-[16px] lg:text-[32px]">
            We know this journey requires trust. That’s why our platform
            ensures:
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] mt-10">
          {[
            "Secure communication between parents and surrogates",
            "Profile verification for authenticity",
            "Resources and support from start to finish",
          ].map((item, index) => (
            <div
              key={item}
              className={`${
                index === 1
                  ? "bg-gradient-to-r from-[#CDCDFB] to-[#F5DDFF]"
                  : "bg-[#FFFFFFB2]"
              } rounded-[30px] p-[30px] backdrop-blur-[50] flex flex-col justify-between gap-[10px] lg:gap-[50px]`}>
              <p className="bg-gradient-to-r from-[#6C6CD3] to-[#092D7B] text-transparent bg-clip-text text-[24px] lg:text-[32px] w-full lg:w-[90%]">
                {item}
              </p>
              <div
                className={`rounded-full h-[58px] w-[58px] flex items-center justify-center self-end ${
                  index === 1 ? "bg-white" : "bg-[#EDEDED]"
                }`}>
                <Plus color="#6C6CD3" size={30} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafeSupportedSecure;
