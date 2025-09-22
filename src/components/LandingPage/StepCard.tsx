import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  step: number;
  title: string;
  desc: string;
}

const StepCard = (props: Props) => {
  return (
    <div className="p-[30px] pr-0 pb-0 bg-[#FBF8FD] rounded-[30px]">
      <div className="mb-5 pr-[30px]">
        <h4 className="text-[20px] lg:text-[32px] text-[#080833] ">
          {props.title}
        </h4>
        <p className="text-[16px] lg:text-[24px] text-[#9E9E9E]">
          {props.desc}
        </p>
      </div>

      <div className="w-full flex justify-end">
        <Image
          src={`/images/number${props.step}.svg`}
          alt=""
          width={100}
          height={500}
        />
      </div>
    </div>
  );
};

export default StepCard;
