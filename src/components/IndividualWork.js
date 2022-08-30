import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ClassNav from "../pages/Shared/ClassNav";
import ClassImage2 from "../image/class2.jpg";

const IndividualWork = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [work, setWork] = useState([]);
  const [success, setSuccess] = useState(false);
  const postRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`)
        .then((res) => res.json())
        .then((data) => setWork(data));
    }, 3000);
  }, [id, success]);

  const handlePost = () => {
    const post = postRef.current.value;
    const data = { post };
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Post Uploaded!");
        setSuccess(true);
      });
  };

  // setTimeout(() => {
  //   work.post.map((p) => console.log(p.post));
  // }, 3000);

  return (
    <>
      <ClassNav />
      <div className="md:max-w-7xl mx-auto">
        {
          <div className="ml-64 mt-8 mb-4">
            <h1 className="text-2xl font-bold">{work.project}</h1>
            <p>By: {work.displayName}</p>
          </div>
        }
        <Link
          to={`/${id}/assign`}
          className="ml-64 bg-[#163A24] p-2 rounded-lg text-white font-bold"
        >
          Assign Teacher{" "}
        </Link>
        <img
          className="bg-cover w-3/5 h-1/2 mx-auto mt-10 rounded-2xl"
          src={ClassImage2}
          alt="A girl doing her thesis work on laptop"
        />
        <div className="bg-red-60 ml-64 mb-20">
          <label class="text-gray-700 flex items-center" for="name">
            <img
              className="w-24 h-20 rounded-full mr-4"
              src={user.photoURL}
              alt=""
            />
            <textarea
              class="flex mt-10 appearance-none border border-gray-500 shadow-lg w-3/5 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              id="post"
              placeholder="What's on your mind"
              name="post"
              rows="5"
              cols="40"
              ref={postRef}
            ></textarea>
          </label>
          <button
            onClick={handlePost}
            className="ml-28 mt-4 border-2 bg-[#163A24] text-white font-bold px-4 py-3 rounded-xl"
            type="submit"
          >
            POST
          </button>
        </div>
        {/* {work.post.map((p) => (
          <p>{p.post}</p>
        ))} */}
      </div>
    </>
  );
};

export default IndividualWork;
