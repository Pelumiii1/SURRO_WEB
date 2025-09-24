import React from "react";
import TestimonalCard from "./TestimonalCard";

const Testimonals = () => {
  return (
    <div className="p-5 mt-10">
      <p className="text-left lg:text-center text-[32px] lg:text-[64px]">
        Stories from Families We’ve Helped
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5">
        <TestimonalCard
          text="After years of struggling, we finally found the perfect surrogate through this platform. Today, we’re proud parents of twins."
          name="Anna Monkeylabi"
        />
        <TestimonalCard
          text="The support I received as a surrogate made me feel valued and respected every step of the way. Truly life-changing"
          name="Lagbaja Tamedo"
        />
        <TestimonalCard
          text="Everything was clear, transparent and supportive. I never felt alone during the process"
          name="Adegorilla Gideon"
        />
      </div>
    </div>
  );
};

export default Testimonals;
