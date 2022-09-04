import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Navigation from "../pages/Shared/Navigation";
import Avatar from "../image/avatar.svg";
import { GridLoader } from "react-spinners";

const JoinClass = () => {
  const { user } = useAuth();
  const [joinData, setjoinData] = useState({});
  const [classes, setClasses] = useState([]);
  const [classLoad, setClassLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const idRef = useRef();
  const codeRef = useRef();
  const navigate = useNavigate();

  const email = user.email;
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...joinData, email };
    newData[field] = value;
    setjoinData(newData);
  };

  fetch(`http://localhost:5000/classes/${joinData.code}`)
    .then((res) => res.json())
    .then((data) => {
      setClasses(data);
      setClassLoad(true);
    });

  const handleJoin = (e) => {
    if (classLoad === true) {
      const teacherEmail = classes.email;
      const courseName = classes.subject;
      const finalData = {
        ...joinData,
        teacherEmail,
        courseName,
      };

      fetch(`http://localhost:5000/users/join/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(finalData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            setSuccess(true);
          }
        });

      // PUT Student ID and Email in Classroom
      const id = idRef.current.value;
      const code = codeRef.current.value;
      const info = { id, email, code };
      fetch(`http://localhost:5000/classes/join/student`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            setSuccess(true);
            navigate(`/myclasses/classroom/${joinData.code}`);
          }
        });
      // console.log(info);
    }
    e.preventDefault();
    e.target.reset();
  };

  return (
    <>
      <Navigation />
      {classLoad ? (
        <div className="flex mt-20 items-center justify-start bg-white">
          <div className="mx-auto w-full max-w-lg">
            <div className="mt-3 border-2 border-gray-400 p-4 ">
              <p className="text-gray-500">Currently signed in as</p>
              <div className="mt-3 flex items-center">
                {user.photoURL ? (
                  <img
                    className="w-10 rounded-full mr-3"
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <img className="w-10 rounded-full mr-3" src={Avatar} alt="" />
                )}
                <div>
                  <h1 className="text-gray-900">{user.displayName}</h1>
                  <h1 className="text-gray-500 text-sm">{user.email}</h1>
                </div>
              </div>
            </div>
            {success && (
              <div className="mt-10">
                <h1 className="font-bold text-[#163A24]">Class Joined!</h1>
              </div>
            )}
            <form
              onSubmit={handleJoin}
              className="mt-10 border-2 border-gray-400 p-4"
            >
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />
              <div className="leading-4 text-gray-700">
                <h1 className="text-base">Class Code</h1>
                <p className="text-sm">
                  Get code from your teacher & enter it here.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 mt-8">
                <div className="relative z-0">
                  <input
                    type="text"
                    name="code"
                    ref={codeRef}
                    onChange={handleBlur}
                    className="peer block w-full appearance-none border-0 border-b border-[#163A24] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#163A24] focus:outline-none focus:ring-0"
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-[#163A24] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#163A24]">
                    Class Code
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="number"
                    name="id"
                    ref={idRef}
                    onChange={handleBlur}
                    className="peer block w-full appearance-none border-0 border-b border-[#163A24] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#163A24] focus:outline-none focus:ring-0"
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-[#163A24] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#163A24]">
                    Student ID
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 rounded-md bg-[#163A24] px-10 py-2 text-white font-bold hover:bg-transparent hover:text-black border-[#163A24] border-2"
              >
                JOIN
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="api-loader md:ml-96 md:pl-72 md:mt-56">
          <GridLoader loading size={24} color="#B22121" />
        </div>
      )}
    </>
  );
};

export default JoinClass;
