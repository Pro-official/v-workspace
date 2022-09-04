import React, { useEffect, useRef, useState } from "react";
import ClassNav from "../pages/Shared/ClassNav";
import AssignmentPhoto from "../image/Assignment.svg";
import useAuth from "../hooks/useAuth";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";

const SubmitAssignment = () => {
  const { user } = useAuth();
  const email = user.email;
  const displayName = user.displayName;
  const linkRef = useRef();
  const { postID } = useParams();
  const navigate = useNavigate();
  const [profile, setProfiles] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setProfiles(data);
          setSuccess(true);
        });
    } else console.log("Can not fetch data");
  }, [email]);

  const handleSubmit = (e) => {
    const link = linkRef.current.value;
    const submissionData = { link, email, displayName, postID };
    // console.log(submissionData);

    fetch(`http://localhost:5000/assignments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submissionData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Assignment Submitted!");
          navigate(-1);
        }
      });
    e.preventDefault();
  };

  return (
    <>
      <ClassNav />
      {profile.type === "teacher" && (
        <>
          {success && (
            <div className="md:max-w-7xl mx-auto">
              <h1 className="mt-8 font-bold text-xl text-white">
                <span className="bg-[#163A24] rounded-lg px-4 py-2">
                  <Link to={`/myclasses/classroom/submissions/${postID}`}>
                    Submissions
                  </Link>
                </span>
              </h1>
            </div>
          )}
        </>
      )}

      <section className="text-gray-600 body-font md:max-w-7xl mx-auto border-2 mt-10 mb-10 hover:shadow-md">
        <div className="container mx-auto flex px-5 pb-24 pt-4 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={AssignmentPhoto}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Submit your Assignment
            </h1>
            <p className="mb-8 leading-relaxed">
              In order to submit your assignment, first save your document in
              any drive, check if someone can access it with the link. Then
              paste the link bellow.
            </p>
            <form className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label
                  htmlFor="hero-field"
                  className="leading-7 mb-2 text-sm text-gray-700 flex items-center"
                >
                  <span>Your Work</span>{" "}
                  <AiOutlineCloudUpload className="text-2xl ml-2" />
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  ref={linkRef}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="inline-flex text-white bg-[#163A24] border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-lg font-bold"
              >
                SUBMIT
              </button>
            </form>

            {/* {success && <BeatLoader loading={success} size={30} />} */}
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Upload file in drive and paste the link here
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubmitAssignment;
