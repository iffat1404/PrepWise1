import { FaCalendarAlt, FaStar } from "react-icons/fa";

const InterviewCard = ({ role, type, techstack, createdAt }) => {
  const typeColor = {
    Technical: "bg-purple-500",
    Mixed: "bg-green-500",
    HR: "bg-yellow-500",
  };

  const imageSrc = `/covers/${techstack?.toLowerCase()}.png`;

  return (
    <div className="relative bg-[#1c1c24] rounded-xl p-4 text-white w-full">
      {/* Tag */}
      <div className={`absolute top-2 right-2 px-2 py-1 rounded-md text-sm ${typeColor[type] || "bg-gray-500"}`}>
        {type}
      </div>

      {/* Logo and Title */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={imageSrc}
          alt={techstack}
          className="w-12 h-12 rounded-full object-cover"
          onError={(e) => (e.target.src = "/covers/default.png")}
        />
        <div>
          <h3 className="font-semibold">{role}</h3>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <FaCalendarAlt /> {createdAt}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm mb-3 text-gray-400">
        You haven't taken the interview yet. Take it now to improve your skills.
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-gray-400">
          <FaStar />
          ---/100
        </div>
        <button className="px-3 py-1 text-sm rounded-full bg-[#9b9bfa] hover:bg-[#8383f0] transition">
          View Interview
        </button>
      </div>
    </div>
  );
};

export default InterviewCard;