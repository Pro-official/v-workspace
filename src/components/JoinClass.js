import React, { useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import Navigation from "../pages/Shared/Navigation";

const JoinClass = () => {
  const { user } = useAuth();
  const [joinData, setjoinData] = useState({});
  const [success, setSuccess] = useState(false);

  const email = user.email;
  const handleBlur = (e) => {
    // const code = codeRef.current.value;
    // const id = idRef.current.value;
    // const newData = { code, id };
    // setjoinData(newData);
    // console.log(newData);
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...joinData, email };
    newData[field] = value;
    setjoinData(newData);
  };

  const handleJoin = (e) => {
    fetch(`http://localhost:5000/classes/${joinData.code}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(joinData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
    e.target.reset();
  };

  return (
    <>
      <Navigation />
      <div className="flex mt-20 items-center justify-start bg-white">
        <div className="mx-auto w-full max-w-lg">
          <div className="mt-3 border-2 border-gray-400 p-4 ">
            <p className="text-gray-500">Currently signed in as</p>
            <div className="mt-3 flex items-center">
              <img
                className="w-10 rounded-full mr-3"
                src={user.photoURL}
                alt=""
              />
              <div>
                <h1 className="text-gray-900">{user.displayName}</h1>
                <h1 className="text-gray-500 text-sm">{user.email}</h1>
              </div>
            </div>
          </div>
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
                  onChange={handleBlur}
                  // ref={codeRef}
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
                  onChange={handleBlur}
                  // ref={idRef}
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
    </>
  );
};

export default JoinClass;