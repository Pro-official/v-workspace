import React from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "../../components/MainPage";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {user.email ? (
        <>
          <MainPage />
        </>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default Home;
