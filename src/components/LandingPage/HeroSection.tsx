import Image from "next/image";
import StoreButtons from "./StoreButtons";

const HeroSection = () => {
  return (
    <div className="bg-white p-5">
      <div className="header-background rounded-[40px] p-5 h-full">
        <div className="flex flex-col items-center justify-between h-full">
          <div className="lg:w-[580px] flex flex-col items-center justify-center space-y-5 pt-10">
            <h1 className="text-[32px] md:text-[72px] text-[#464646] font-normal leading-[100%] text-center">
              Bringing Dreams of Parenthood to Life.
            </h1>
            <p className="text-[#9E9E9E] text-[16px] lg:text-[24px] text-center">
              We connect loving parents with caring surrogates. Because every
              family deserves a chance to grow.
            </p>

            <p className="text-[24px] lg:text-[32px] bg-gradient-to-r from-[#012770] via-[#3651BB] to-[#6C6CD3] bg-clip-text text-transparent">
              Become a Surrogate today
            </p>
            <StoreButtons />
          </div>

          {/* Bottom Images  */}
          <div className="flex overflow-x-scroll lg:grid grid-cols-3 gap-5 mt-20 w-[80vw] lg:w-full">
            <Image
              src="/images/mother-breastfeeding.svg"
              alt=""
              width={500}
              height={500}
              className="min-w-[220px] lg:min-w-[420px] h-auto"
            />
            <Image
              src="/images/pregnant-mother.svg"
              alt=""
              width={500}
              height={500}
              className="min-w-[220px] lg:min-w-[420px] h-auto"
            />
            <Image
              src="/images/pregnant-mother-with-child.svg"
              alt=""
              width={500}
              height={500}
              className="min-w-[220px] lg:min-w-[420px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
