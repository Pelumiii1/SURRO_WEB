import Image from "next/image";
import StoreButtons from "./StoreButtons";

const BecomeAnAgent = () => {
  return (
    <div className="p-5 lg:p-10 my-[2rem] flex flex-col-reverse lg:grid grid-cols-2 gap-5">
      <div>
        <h4 className="text-[32px] lg:text-[64px]">Become an Agent</h4>
        <p className="text-[#9E9E9E] text-[20px] lg:text-[32px]">
          Be the bridge that connects wishful parents to their dream surrogates
        </p>
        <p className="bg-gradient-to-r from-[#012770] via-[#3651BB] to-[#6C6CD3] bg-clip-text text-transparent text-[24px] lg:[32px] mt-3">
          Become an Agent today
        </p>
        <div className="h-3 lg:h-10" />

        <StoreButtons />
      </div>
      <div className="place-items-end">
        <Image
          src={"/images/doctor.svg"}
          alt=""
          width={200}
          height={200}
          className="w-full h-auto lg:w-[500px]"
        />
      </div>
    </div>
  );
};

export default BecomeAnAgent;
