import React from "react";
import Navigation from "../pages/Shared/Navigation";

const Assign = () => {
  return (
    <>
      <Navigation />
      <div class="relative flex min-h-screen flex-col items-center mt-20 overflow-hidden bg-white p-8 sm:p-12">
        <div class="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
          <div class="mx-auto flex max-w-sm flex-col items-center">
            <h3 class="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">
              Assign
            </h3>
            <p class="mt-3 text-center text-black/80">
              Assign a teacher from the{" "}
              <span className="text-[#163A24] underline underline-offset-2">
                teachers list
              </span>{" "}
              to get top-notch evaluation of your project.
            </p>
            <form class="mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                class="grow rounded-lg border-2 border-gray-500 border-transparent bg-violet-200/50 py-3 px-5 placeholder:text-black/30 focus:border-violet-500 focus:outline-none"
                placeholder="Email Address"
              />
              <button
                type="submit"
                class="rounded-lg bg-[#163A24] px-5 py-3 font-bold text-white"
              >
                ASSIGN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assign;
