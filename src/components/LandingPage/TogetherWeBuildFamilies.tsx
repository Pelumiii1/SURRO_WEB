import React from "react";
import StoreButtons from "./StoreButtons";
import Image from "next/image";

const TogetherWeBuildFamilies = () => {
  return (
    <div className="bg-[#FBF8FC] rounded-[40px] m-5 lg:m-10 my-[2rem] grid">
      <div className="lg:w-[760px] lg:mx-auto flex flex-col items-center m-5">
        <h1 className="text-[#464646] text-[32px] lg:text-[64px] text-center">
          Together, We Build Families
        </h1>
        <p className="text-[#9E9E9E] text-[16px] lg:text-[24px] text-center">
          Every story is unique, but the dream is the same. to experience the
          joy of family. Start your journey today.
        </p>
        <div className="h-3 lg:h-10" />
        <StoreButtons />
      </div>
      <Image
        src="/vector/Vector6.svg"
        alt=""
        width={100}
        height={100}
        className="w-full h-full rounded-b-[40px]"
      />
    </div>
  );
};

export default TogetherWeBuildFamilies;
