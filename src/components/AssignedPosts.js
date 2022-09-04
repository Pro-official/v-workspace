import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";
// import PostWorkPhoto from "../../image/work.svg";
import PostWorkPhoto from "../image/work.svg";
import AvatarPhoto from "../image/avatar.svg";
import useAuth from "../hooks/useAuth";
import ClassNav from "../pages/Shared/ClassNav";

const AssignedPosts = () => {
  const [cl, setCl] = useState([]);
  const [success, setSuccess] = useState(false);
  const { user } = useAuth();
  const { code } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/classes/${code}`)
      .then((res) => res.json())
      .then((data) => {
        setCl(data);
        setSuccess(true);
      });
  }, [code, success]);

  return (
    <>
      <ClassNav />
      {success ? (
        <>
          <div className="md:max-w-3xl mx-auto">
            <div className="rounded relative mt-8 h-72">
              <img
                src={PostWorkPhoto}
                alt=""
                className="w-full h-full rounded absolute shadow"
              />
              <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded"></div>
              <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                <p className="text-xs text-gray-100">Change Cover Photo</p>
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
            </div>
            <section className="mt-20 mb-10">
              <>
                {cl.assign ? (
                  cl.assign
                    .map((post) => (
                      <div
                        key={cl._id}
                        className="p-10 border-2 shadow-sm hover:shadow-lg"
                      >
                        <div className="flex items-center">
                          {user.photoURL ? (
                            <img
                              className="w-10"
                              src={user.phtoURL}
                              alt="User"
                            />
                          ) : (
                            <img
                              className="w-10"
                              src={AvatarPhoto}
                              alt="User"
                            />
                          )}
                          <div>
                            <h1 className="ml-4 font-bold">{cl.displayName}</h1>
                            <p className="ml-4 -mt-1 text-sm text-gray-600">
                              {cl.email}
                            </p>
                          </div>
                        </div>
                        <h1 className="mt-3  text-2xl text-[#163A24] font-bold">
                          {post.project}
                        </h1>
                        <h3 className="mt-1 text-base text-gray-600 mb-3">
                          {post.desc}
                        </h3>
                        <h1 className="font-bold">Teacher Requirements: </h1>
                        <p className="mb-3">{post.instruction}</p>
                        <p className="text-sm inline px-2 pt-1 pb-2 rounded-lg text-white bg-[#163A24]">
                          {post.time} Days
                        </p>
                      </div>
                    ))
                    .reverse()
                ) : (
                  <div className="text-center">
                    <h1 className="font-bold text-3xl text-[#163A24]">
                      No announcement has been made!
                    </h1>
                    <Link to={`/myclasses/classroom/announcement/${code}`}>
                      <button className="btn rounded-lg mt-4">Make one</button>
                    </Link>
                  </div>
                )}
              </>
            </section>
          </div>
        </>
      ) : (
        <div className="api-loader md:ml-96 md:pl-72 md:mt-56">
          <GridLoader loading size={24} color="#B22121" />
        </div>
      )}
    </>
  );
};

export default AssignedPosts;
