"use client";

import { Plus } from "lucide-react";
import React from "react";

const Questions = () => {
  const [active, setActive] = React.useState("");
  const questionsAndAnswers = [
    {
      questions: "How do I know the surrogates are genuine",
      answer:
        "All surrogate profiles go through verification to ensure authenticity and safety",
    },
    {
      questions: "Is it free to become a surrogate?",
      answer:
        "All surrogate profiles go through verification to ensure authenticity and safety",
    },
    {
      questions: "What support do you provide  parents?",
      answer:
        "All surrogate profiles go through verification to ensure authenticity and safety",
    },
    {
      questions: "Can I cancel my membership?",
      answer:
        "All surrogate profiles go through verification to ensure authenticity and safety",
    },
  ];

  return (
    <div className="p-5 lg:p-10 my-[2rem] grid">
      <h1 className="text-[#464646] text-[32px] lg:text-[64px] m-auto">
        Questions? We’ve Got Answers
      </h1>
      <div>
        <div className="h-3 lg:h-10" />
        <div className="grid grid-cols-1 gap-5">
          {questionsAndAnswers.map((qna, index) => {
            const isActive = Number(active) === index;

            return (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setActive(isActive ? "" : index.toString())}
              >
                <div className="flex gap-5 bg-[#FBF8FC] rounded-[30px] items-center justify-between px-[10px] py-[20px] lg:px-[20px] lg:py-[20px]">
                  <p className="bg-gradient-to-r from-[#6C6CD3] to-[#092D7B] bg-clip-text text-transparent text-[20px] lg:text-[32px]">
                    {qna.questions}
                  </p>
                  <div
                    className={`bg-white rounded-full p-[5px] transition-transform duration-300 ${
                      isActive ? "rotate-45" : ""
                    }`}
                  >
                    <Plus color="#6C6CD3" size={30} />
                  </div>
                </div>

                {/* Animated Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#737373] text-[16px] lg:text-[24px] my-5 px-[10px] lg:px-[20px]">
                    {qna.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Questions;
