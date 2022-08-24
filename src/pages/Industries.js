import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Shared/Navigation";

const Industries = () => {
  return (
    <>
      <Navigation />
      <div className="text-center flex-col items-center justify-center join">
        <button>
          <Link to="/postwork">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-32 w-32 bg-[#163A24] rounded-full text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </Link>
        </button>
        <h1 className="md:text-4xl text-2xl text-[#163A24] font-bold">
          Post Work
        </h1>
      </div>
    </>
  );
};

export default Industries;
