import React from "react";
import { Button } from "../ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const StoreButtons = () => {
  return (
    <div className="lg:flex gap-5 lg:items-center lg:justify-center w-full lg:w-fit space-y-5 lg:space-y-0 ">
      <Button className="bg-gradient-to-r rounded-[100px] from-[#012770] via-[#3651BB] to-[#6C6CD3] text-white h-[45px] text-[13px] font-semibold w-full lg:w-[200px]">
        Get on Playstore <FaGooglePlay />
      </Button>
      <Button className="border border-[#E7E7EE] rounded-[100px] h-[45px] text-[13px] font-semibold bg-transparent hover:bg-white w-full lg:w-[200px] flex items-center">
        <p className="bg-gradient-to-r from-[#6C6CD3] to-[#092D7B] bg-clip-text text-transparent">
          Get on Appstore
        </p>
        <FaApple color="#092D7B" />
      </Button>
    </div>
  );
};

export default StoreButtons;
