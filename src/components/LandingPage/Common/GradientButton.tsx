import React from "react";

const GradientButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-gradient-to-r from-[#012770] via-[#3651BB] to-[#6C6CD3] text-white w-full h-[47px] rounded-[100px]">
      <p>{text}</p>
    </button>
  );
};

export default GradientButton;
