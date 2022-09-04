import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import ClassNav from "../pages/Shared/ClassNav";

const Submissions = () => {
  const [assignments, setAssignments] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/assignments/`)
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
        setSuccess(true);
      });
  }, []);

  return (
    <>
      <ClassNav />
      <section className="md:max-w-3xl mx-auto mt-20">
        <h1 className="text-xl font-bold text-[#163A24] mb-8 underline underline-offset-4">
          All Submissions
        </h1>
        {success ? (
          assignments.map((assignment) => (
            <>
              <div className="flex items center justify-between mt-8 p-3 border-1 shadow-md">
                <h1 className="text-left">{assignment.displayName}</h1>
                <p>{assignment.email}</p>
                <button className="bg-[#163A24] text-white  px-2 py-1 rounded-lg">
                  Reccommed
                </button>
              </div>
            </>
          ))
        ) : (
          <div className="api-loader md:ml-96 md:pl-72 md:mt-56">
            <GridLoader loading size={24} color="#B22121" />
          </div>
        )}
      </section>
    </>
  );
};

export default Submissions;
