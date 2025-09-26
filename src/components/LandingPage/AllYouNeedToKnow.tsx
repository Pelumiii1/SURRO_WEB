import React from "react";
import Image from "next/image";
import StoreButtons from "./StoreButtons";

const AllYouNeedToKnow = () => {
  return (
    <div className="p-5 lg:p-10 my-[2rem]">
      <h1 className="text-[32px] lg:text-[64px] font-[400] text-[#464646] leading-[120%] lg:text-center text-center">
        All you need to know
      </h1>
      <div className="h-2 lg:h-10" />

      <Image
        src="/images/dummy-video.svg"
        alt="All you need to know"
        width={300}
        height={300}
        className="w-full h-auto"
        fetchPriority="high"
      />
      <div className="h-3 lg:h-10" />

      <div className="flex justify-center">
        <StoreButtons />
      </div>
    </div>
  );
};

export default AllYouNeedToKnow;
