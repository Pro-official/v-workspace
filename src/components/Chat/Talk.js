import React from "react";
import ClassNav from "../../pages/Shared/ClassNav";
import three from "../../image/3.jpg";
import two from "../../image/2.jpg";
import four from "../../image/4.jpg";
import { AiOutlineRise } from "react-icons/ai";

const Talk = () => {
  return (
    <>
      <ClassNav />

      <div class="bg-white overflow-hidden md:max-w-7xl mx-auto lg:flex lg:items-center">
        <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl font-extrabold text-black sm:text-4xl">
            <span class="block">
              Video Chat is essential for every organization
            </span>
          </h2>
          <p class="text-md mt-4 text-gray-600">
            We have a rich video chat system where anyone can join with the
            link. Turn on your video and audio. Join in group or private chat
            system with your teacher or manager.
          </p>
          <a
            href="https://v-workspace-videochat.vercel.app/create"
            target="_blank"
            rel="noreferrer"
          >
            <div class="lg:mt-0 lg:flex-shrink-0">
              <div class="mt-6 inline-flex rounded-md shadow">
                <button
                  type="button"
                  class="py-2 flex items-center px-4 bg-[#163A24] hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  <span>Start Meeting</span>{" "}
                  <AiOutlineRise className="ml-2 text-2xl" />
                </button>
              </div>
            </div>
          </a>
        </div>
        <div class="flex items-center gap-8 p-8 lg:py-24">
          <img src={three} class="rounded-lg w-1/2" alt="Tree" />
          <div>
            <img src={two} class="rounded-lg mb-8" alt="Tree" />
            <img src={four} class="rounded-lg" alt="Tree" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Talk;
