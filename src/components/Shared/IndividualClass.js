import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";
import ClassNav from "../../pages/Shared/ClassNav";

const IndividualClass = () => {
  const [cl, setCl] = useState([]);
  const [success, setSuccess] = useState(false);

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
          <h1>{cl.displayName}</h1>
          <h1>{cl.subject}</h1>
          <h1>{cl.org}</h1>
          {cl.posts.map((post) => (
            <h1>{post.title}</h1>
          ))}
        </>
      ) : (
        <div className="api-loader md:ml-96 md:pl-72 md:mt-56">
          <GridLoader loading size={24} color="#B22121" />
        </div>
      )}
    </>
  );
};

export default IndividualClass;
