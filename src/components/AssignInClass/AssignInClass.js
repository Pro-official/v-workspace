import React, { useEffect, useRef, useState } from "react";
import Navigation from "../../pages/Shared/Navigation";
import TeacherPhoto from "../../image/teacher.svg";
import AvatarPhoto from "../../image/avatar.svg";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";

const AssignInClass = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const insturctionRef = useRef();
  const codeRef = useRef();

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setSuccess(true);
      });
  }, [id, success]);

  const handleSubmit = (e) => {
    const postID = Math.random().toString(36).substring(2, 7);
    console.log(postID);
    const instruction = insturctionRef.current.value;
    const code = codeRef.current.value;
    const assignData = {
      project: project.project,
      desc: project.desc,
      time: project.limit,
      code,
      postID,
      instruction,
    };
    console.log(assignData);

    fetch(`http://localhost:5000/classes/assign`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Project Assigned in classrrom");
        navigate(`/classroom/${postID}`);
      });
    e.preventDefault();
  };

  return (
    <>
      <Navigation />
      {success ? (
        <dh-component>
          <form
            onSubmit={handleSubmit}
            className="md:max-w-5xl mx-auto mb-24"
            id="login"
          >
            <div>
              <div className="mx-auto rounded">
                <div className="xl:w-full border-b border-gray-300 py-5 bg-white ">
                  <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                    <p className="text-lg text-gray-800 font-bold">
                      Assign To Classroom
                    </p>
                    <div className="ml-2 cursor-pointer text-gray-900  ">
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
                <div className="mx-auto -mt-8">
                  <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                    <div className="rounded relative mt-8 h-80">
                      <img
                        src={TeacherPhoto}
                        alt=""
                        className="w-full h-full rounded shadow"
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
                        required
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-900  "
                        defaultValue={project.project}
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
                        required
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-900  "
                        defaultValue={project.limit}
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
                        required
                        className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-900  "
                        defaultValue={project.desc}
                        rows="5"
                      ></textarea>
                    </div>

                    <div className="mt-4 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                      <label
                        htmlFor="Instruction"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Extra Instruction
                      </label>
                      <textarea
                        id="instruction"
                        name="instruction"
                        ref={insturctionRef}
                        required
                        className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-900"
                        placeholder="Anything you want to add..."
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="mt-4 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                      <label
                        htmlFor="Class Code"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Class Code
                      </label>
                      <input
                        tabIndex="0"
                        type="text"
                        id="code"
                        name="code"
                        required
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-900  "
                        ref={codeRef}
                      />
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
      ) : (
        <div className="api-loader md:ml-96 md:pl-72 md:mt-56">
          <GridLoader loading size={24} color="#B22121" />
        </div>
      )}
    </>
  );
};

export default AssignInClass;
