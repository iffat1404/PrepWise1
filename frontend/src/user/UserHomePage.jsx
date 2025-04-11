import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InterviewCard from "../components/InterviewCard";
import robot from "../assets/robot.png";

const UserHomePage = () => {
  const [userInterviews, setUserInterviews] = useState([]);
  const [allInterviews, setAllInterviews] = useState([]);

  useEffect(() => {
    const fetchInterviews = async () => {
      const userData = [];
      const upcomingData = [
        {
          id: 1,
          role: "Front End Interview",
          type: "Mixed",
          techstack: "amazon", // Matches amazon.png in covers
          createdAt: "2025-03-17",
        },
        {
          id: 2,
          role: "Mobile Developer Interview",
          type: "Mixed",
          techstack: "facebook", // Matches facebook.png in covers
          createdAt: "2025-03-17",
        },
        {
          id: 3,
          role: "Backend Developer Interview",
          type: "Technical",
          techstack: "spotify", // Matches spotify.png in covers
          createdAt: "2025-03-18",
        },
      ];

      setUserInterviews(userData);
      setAllInterviews(upcomingData);
    };

    fetchInterviews();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white w-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full px-8 py-16 bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl font-bold leading-snug">
            Get Interview-Ready with <br />
            <span className="text-purple-500">AI-Powered Practice & Feedback</span>
          </h2>
          <p className="text-lg text-gray-300">
            Practice real interview questions and get instant feedback to level up your career.
          </p>
          <Link
            to="/interview"
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-xl w-fit text-lg transition"
          >
            Start an Interview
          </Link>
        </div>

        {/* Right Hero Image */}
        <div className="md:w-1/3 flex justify-center object-cover">
          <img
            src={robot}
            alt="AI Interview Illustration"
            className="max-w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Your Interviews */}
      <section className="px-8 py-10">
        <h2 className="text-2xl font-semibold mb-4">Your Interviews</h2>
        {userInterviews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {userInterviews.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400">You haven't taken any interviews yet.</p>
        )}
      </section>

      {/* Take Interviews */}
      <section className="px-8 pb-16">
        <h2 className="text-2xl font-semibold mb-4">Take Interviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allInterviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              role={interview.role}
              type={interview.type}
              techstack={interview.techstack}
              createdAt={interview.createdAt}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserHomePage;