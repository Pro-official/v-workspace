import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Navigation from "../pages/Shared/Navigation";

const IndividualWork = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [work, setWork] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setWork(data));
  }, [id]);

  console.log(work.displayName);

  return (
    <>
      <Navigation />
      <h1>Individual Work</h1>
    </>
  );
};

export default IndividualWork;
