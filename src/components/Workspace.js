import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";
import Navigation from "../pages/Shared/Navigation";
import Avatar from "../image/avatar.svg";
import { Link } from "react-router-dom";

const Workspace = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
    setLoading(true);
  }, []);

  return (
    <>
      <Navigation />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto ">
          <div class="grid md:grid-cols-3 m-4">
            {loading ? (
              <>
                {projects
                  .filter((project) => project.email === user.email)
                  .map((project) => (
                    <Link to={`${project._id}`}>
                      <div class="p-4 ">
                        <div class="h-full border-2  border-gray-400 border-opacity-60 rounded-2xl overflow-hidden">
                          <div class="w-full">
                            <div class="w-full flex p-2">
                              <div class="p-2 ">
                                {user.photoURL ? (
                                  <img
                                    src={user.photoURL}
                                    alt="author"
                                    class="w-10 h-10 rounded-full overflow-hidden"
                                  />
                                ) : (
                                  <img
                                    src={Avatar}
                                    alt="author"
                                    class="w-10 h-10 rounded-full overflow-hidden"
                                  />
                                )}
                              </div>
                              <div class="pl-2 pt-4">
                                <p class="font-bold text-[#163A24]">
                                  {project.displayName}
                                </p>
                              </div>
                            </div>
                          </div>

                          <img
                            class="lg:h-48 md:h-36 w-full object-cover object-center"
                            src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/blog.jpg?alt=media&token=271cb624-94d4-468d-a14d-455377ba75c2"
                            alt="blog cover"
                          />

                          <div class="p-4">
                            <h2 class="tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase ">
                              {project.org}
                            </h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-1">
                              {project.project}
                            </h1>
                            <div class="flex items-center flex-wrap ">
                              <button class="text-green-400  md:mb-2 lg:mb-0">
                                <p class="inline-flex items-center">
                                  Explore Class
                                  <svg
                                    class="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                  </svg>
                                </p>
                              </button>
                              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg
                                  class="w-4 h-4 mr-1"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                                24
                              </span>
                              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg
                                  class="w-4 h-4 mr-1"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                                89
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                  .reverse()}
              </>
            ) : (
              <div className="api-loader ml-96 pl-72 mt-56">
                <GridLoader loading size={24} color="#B22121" />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Workspace;
