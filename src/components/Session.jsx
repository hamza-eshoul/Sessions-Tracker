import WorkIcon from "../assets/work.svg?react";
import BookIcon from "../assets/book.svg?react";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const Session = ({ sessionNbr, sessionTime, isSmall }) => {
  const [isCompleted, setIsCompleted] = useState(true);
  return (
    <article
      className={`flex ${
        isSmall ? "w-[280px]" : "w-[320px]"
      } mx-auto items-center justify-between rounded-lg px-5 py-3.5 bg-[#062C87] text-white font-medium my-6 hover:bg-[#020860] transition duration-500 ease-in-out cursor-pointer`}
    >
      {isSmall && (
        <div className="flex gap-2">
          <BookIcon />
          <span>SM </span>
        </div>
      )}

      {!isSmall && (
        <div className="flex gap-2">
          <WorkIcon />
          <span>Session {sessionNbr}</span>
        </div>
      )}

      <span>{sessionTime}</span>

      <div
        className={`${
          isCompleted ? "bg-[#0D9488]" : "bg-white"
        } w-6 h-6  rounded-full flex items-center justify-center`}
      >
        <FaCheck
          className={`${isCompleted ? "text-white" : "text-[#052c87]"} text-sm`}
        />
      </div>
    </article>
  );
};

export default Session;
