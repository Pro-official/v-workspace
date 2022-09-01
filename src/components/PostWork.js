import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Navigation from "../pages/Shared/Navigation";
import PostWorkPhoto from "../image/postwork.png";
import AvatarPhoto from "../image/avatar.svg";

const PostWork = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  // const [teachers, setTeachers] = useState([]);

  const projectRef = useRef();
  const descRef = useRef();
  const limitRef = useRef();
  const orgRef = useRef();

  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((res) => res.json())
  //     .then((data) => setTeachers(data));
  // }, []);

  const handleSubmit = (e) => {
    const name = user.displayName;
    const email = user.email;
    const project = projectRef.current.value;
    const desc = descRef.current.value;
    const limit = limitRef.current.value;
    const org = orgRef.current.value;

    const projectData = { displayName: name, email, project, org, desc, limit };
    e.preventDefault();

    fetch(`http://localhost:5000/projects`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(projectData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Project Created!");
        navigate(`/workspace`);
      });
  };

  return (
    <>
      <Navigation />
      {/* <div className="flex mx-auto flex-wrap w-full">
        <div className="w-1/2 shadow-2xl md:-mt-4">
          <img
            alt="login"
            className="hidden object-cover w-full h-screen md:block"
            src={PostWorkPhoto}
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="md:text-3xl text-xl text-[#163A24] font-bold font-header text-left">
              Post Work!
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col pt-3 md:pt-4"
            >
              <div className="flex flex-col pt-4">
                <div className="flex">
                  <span className="inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="design-create-name"
                    className=" flex-1 h-14 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#163A24] focus:border-transparent"
                    placeholder="Teachers Name"
                    name="displayName"
                    defaultValue={user.displayName}
                    ref={nameRef}
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="flex">
                  <span className="inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                    </svg>
                  </span>
                  <input
                    type="email"
                    id="design-login-email"
                    className="flex-1 h-14 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#163A24] focus:border-transparent"
                    placeholder="Email"
                    name="email"
                    defaultValue={user.email}
                    ref={emailRef}
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="flex ">
                  <span className="inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeWidth="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="design-login-email"
                    className=" flex-1 h-14 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#163A24] focus:border-transparent"
                    placeholder="Project Title"
                    name="project"
                    ref={projectRef}
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="flex ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="design-login-email"
                    className=" flex-1 h-14 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#163A24] focus:border-transparent"
                    placeholder="Company"
                    name="company"
                    ref={orgRef}
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4 pb-4">
                <div className="flex ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="design-login-email"
                    className=" flex-1 h-14 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#163A24] focus:border-transparent"
                    placeholder="Code"
                    name="code"
                    ref={codeRef}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg h-14 px-4 py-2 mb-8 md:text-2xl font-bold text-center text-white transition duration-200 ease-in bg-[#163A24] shadow-md hover:text-black hover:border-2 border-[#163A24] font-header hover:bg-white focus:outline-none focus:ring-2"
              >
                <span className="w-full">POST</span>
              </button>
            </form>
          </div>
        </div>
      </div> */}
      <dh-component>
        <form
          onSubmit={handleSubmit}
          className="md:max-w-5xl mx-auto mb-24"
          id="login"
        >
          <div className="bg-white">
            <div className=" mx-auto bg-white  rounded">
              <div className="xl:w-full border-b border-gray-300  py-5 bg-white ">
                <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                  <p className="text-lg text-gray-800 font-bold">Post Wrok</p>
                  <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path
                        className="heroicon-ui"
                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mx-auto">
                <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                  <div className="rounded relative mt-8 h-72">
                    <img
                      src={PostWorkPhoto}
                      alt=""
                      className="w-full h-full object-cover rounded absolute shadow"
                    />
                    <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded"></div>
                    <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                      <p className="text-xs text-gray-100">
                        Change Cover Photo
                      </p>
                      <div className="ml-2 text-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                          <line x1="16" y1="5" x2="19" y2="8" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt=""
                          className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                        />
                      ) : (
                        <img
                          src={AvatarPhoto}
                          alt=""
                          className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                        />
                      )}
                      <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0"></div>
                    </div>
                  </div>
                  <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                    <label
                      htmlFor="username"
                      className="pb-2 text-sm font-bold text-gray-800 "
                    >
                      Project Name
                    </label>
                    <input
                      tabIndex="0"
                      type="text"
                      id="username"
                      name="projectName"
                      ref={projectRef}
                      required
                      className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400"
                      placeholder="@name"
                    />
                  </div>
                  <div className="mt-4 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                    <label
                      htmlFor="Time Limit"
                      className="pb-2 text-sm font-bold text-gray-800 "
                    >
                      Time Limit
                    </label>
                    <input
                      tabIndex="0"
                      type="number"
                      id="limit"
                      name="limit"
                      ref={limitRef}
                      required
                      className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400"
                      placeholder="Time limit"
                    />
                  </div>
                  <div className="mt-4 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                    <label
                      htmlFor="Organization"
                      className="pb-2 text-sm font-bold text-gray-800 "
                    >
                      Organization
                    </label>
                    <input
                      tabIndex="0"
                      type="text"
                      id="org"
                      name="org"
                      ref={orgRef}
                      required
                      className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400"
                      placeholder="Organization Name"
                    />
                  </div>
                  <div className="mt-4 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                    <label
                      htmlFor="Description"
                      className="pb-2 text-sm font-bold text-gray-800 "
                    >
                      Description
                    </label>
                    <textarea
                      id="desc"
                      name="desc"
                      ref={descRef}
                      required
                      className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-600 dark:text-gray-400"
                      placeholder="Describe you project for better understanding"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button
              aria-label="Post Project"
              className="mt-4 focus:ring-2 rounded-lg font-bold focus:ring-offset-2 focus:ring-[#163A24] bg-[#163A24] focus:outline-none transition duration-150 ease-in-out hover:bg-black text-white px-8 py-2 text-sm"
              type="submit"
            >
              POST
            </button>
          </div>
        </form>
      </dh-component>
    </>
  );
};

export default PostWork;
