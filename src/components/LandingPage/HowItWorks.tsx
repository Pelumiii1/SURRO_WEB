import React from "react";
import StepCard from "./StepCard";

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="p-5 lg:p-10 mt-[2rem]">
      <div className="w-full lg:w-[450px] mx-auto">
        <h2 className="text-[32px] lg:text-[64px] text-[#464646] font-bold text-center">
          How It Works.
        </h2>
        <p className="text-[#9E9E9E] text-[16px] lg:text-[24px] text-center">
          Your journey to happy parenthood begins with these steps.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <StepCard
          step={1}
          title="Create Your Profile"
          desc="You can build personalized profiles to share your story, background, and what you’re looking for."
        />
        <StepCard
          step={2}
          title="Verify your identity"
          desc="To ensure a safe and trusted platform, we will ask you to verify your identity and status."
        />
        <StepCard
          step={3}
          title="Get Matched"
          desc="Our platform helps you find the right fit whether you’re a parent seeking a surrogate or a surrogate offering your gift of hope."
        />
        <StepCard
          step={4}
          title="Start the Journey"
          desc="With our resources, guidance, and community, you’ll take the next steps together confidently and supported."
        />
      </div>
    </div>
  );
};

export default HowItWorks;
