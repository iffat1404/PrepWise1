import React from "react";
import AnimatedAgentCard from "../components/AnimatedAgentCard";// Adjust path if needed

const InterviewPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-black text-white px-6 py-6">
      {/* Logo and Header */}
      <div className="flex items-center mb-4">
        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-xl font-semibold">PrepWise</span>
      </div>

      {/* Page Title */}
      <h2 className="text-lg mb-8">Interview Generation</h2>

      {/* Cards Container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 w-full">
        <AnimatedAgentCard
          label="AI Interviewer"
          imageSrc="/public/ai-avatar.png"
        />
        {/* Hide on small screens */}
        <div className="hidden sm:block">
          <AnimatedAgentCard
            label="You"
            imageSrc="/public/user-avatar.png"
            isUser={true}
          />
        </div>
      </div>

      {/* Message Box */}
      <div className="mt-8 bg-[#1c1c2e] text-center py-3 px-6 rounded-lg max-w-md w-full mx-auto text-sm">
        My name is John Doe, nice to meet you!
      </div>

      {/* Call Button */}
      <div className="flex justify-center mt-6">
        <button className="!bg-green-500 hover:!bg-green-600 text-white px-6 py-2 rounded-full transition-all">
          Call
        </button>
      </div>
    </div>
  );
};

export default InterviewPage;
