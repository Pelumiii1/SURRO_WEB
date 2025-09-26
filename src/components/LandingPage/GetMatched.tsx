import Image from "next/image";
import React from "react";
import StoreButtons from "./StoreButtons";

const GetMatched = () => {
  return (
    <div className="bg-[#FBF8FC] rounded-[40px] m-2 lg:m-10 my-[2rem] relative  overflow-hidden">
      <Image
        src={"/vector/vector3.svg"}
        alt=""
        width={100}
        height={100}
        fetchPriority="high"
        className="w-full h-full hidden lg:block z-30 absolute"
      />
      <Image
        src={"/vector/vector4.svg"}
        alt=""
        width={100}
        height={100}
        fetchPriority="high"
        className="w-full h-fit lg:hidden block z-10 lg:z-30 absolute"
      />
      <div className="w-full h-full grid gap-10 lg:grid-cols-2 items-center p-5 lg:p-0 z-30">
        <div className="flex justify-center items-center z-10">
          <Image
            src={"/images/phone-mockup.svg"}
            alt=""
            width={100}
            height={100}
            fetchPriority="high"
            className=" w-[260px] h-[700px] hidden lg:block"
          />
          <Image
            src={"/images/phone-mockup-2.svg"}
            alt=""
            width={100}
            height={100}
            fetchPriority="high"
            className=" w-[260px]  h-[700px] block lg:hidden"
          />
        </div>
        <div className="z-40">
          <h1 className="text-[#464646] text-[32px] lg:text-[64px]">
            Get matched on the go
          </h1>
          <p className="text-[#9E9E9E] text-[16px] lg:text-[32px]">
            We understand that you need to be flexible, that’s why we chose the
            device most readily available to you.
          </p>
          <div className="h-10" />
          <StoreButtons />
        </div>
      </div>
    </div>
  );
};

export default GetMatched;
