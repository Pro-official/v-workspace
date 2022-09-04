import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";
import Navigation from "../pages/Shared/Navigation";
import Avatar from "../image/avatar.svg";
import "./Workplace.css";
import { Link } from "react-router-dom";

const Workspace = () => {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
    setLoading(true);

    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <Navigation />
      <section>
        <section className="area mt-10 mb-10">
          {loading ? (
            <>
              {projects
                .map((project) => (
                  <div
                    key={project._id}
                    className="half border-2 m-8 shadow-sm hover:shadow-lg"
                  >
                    <div className="flex items-center">
                      {user.photoURL ? (
                        <img className="w-10" src={user.phtoURL} alt="User" />
                      ) : (
                        <img className="w-10" src={Avatar} alt="User" />
                      )}
                      <h1 className="ml-4">{project.displayName}</h1>
                    </div>
                    <h1 className="mt-3 text-lg text-[#163A24] font-bold">
                      {project.project}
                    </h1>
                    <h3 className="mt-3">{project.desc}</h3>
                    <p className="text-sm mt-3 text-gray-600">{project.org}</p>
                    {users
                      .filter((profile) => profile.email === user.email)
                      .map((profile) =>
                        profile.type === "teacher" ? (
                          <Link
                            key={profile._id}
                            to={`/myclasses/${project._id}/assign-in-class`}
                          >
                            <button
                              type="submit"
                              className="btn mt-3 rounded-lg flex items-center font-bold uppercase"
                            >
                              <span>Assign</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 ml-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                              </svg>
                            </button>
                          </Link>
                        ) : (
                          <Link to={`/${project._id}/assign-teacher`}>
                            <button
                              type="submit"
                              className="btn mt-3 rounded-lg flex items-center font-bold uppercase"
                            >
                              <span>Assign Teacher</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 ml-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                              </svg>
                            </button>
                          </Link>
                        )
                      )}
                  </div>
                ))
                .reverse()}
            </>
          ) : (
            <div className="api-loader md:ml-96 md:pl-72 md:mt-56">
              <GridLoader loading size={24} color="#B22121" />
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default Workspace;
