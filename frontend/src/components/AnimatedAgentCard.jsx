import React from "react";

const AnimatedAgentCard = ({ label, imageSrc, isUser }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#0b0b2d] to-[#111132] text-white rounded-xl p-6 w-[18rem] sm:w-[22rem] h-96 sm:h-[28rem] shadow-lg">
      <div className="relative w-32 h-32 mb-4">
        {!isUser && (
          <div className="absolute inset-0 rounded-full w-full h-full animate-ping bg-[#b9b9e3] opacity-30 z-0"></div>
        )}
        <div className="relative z-10 w-full h-full rounded-full bg-[#2b2b51] flex items-center justify-center">
          <img
            src={imageSrc}
            alt={label}
            className={`w-28 h-28 rounded-full object-cover ${isUser ? "border-2 border-white" : ""}`}
          />
        </div>
      </div>
      <p className="text-xl font-semibold">{label}</p>
    </div>
  );
};

export default AnimatedAgentCard;
