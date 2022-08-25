import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Registration/Register.jsx";
import AuthProvider from "./context/AuthProvider";
import Home from "./pages/Home/Home";
import Login from "./pages/Registration/Login";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Industries from "./pages/Industries";
import JoinClass from "./components/JoinClass";
import CreateClass from "./components/CreateClass";
import MyClasses from "./components/MyClasses";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<Students />} />
          <Route path="/joinclass" element={<JoinClass />} />
          <Route path="/teacher" element={<Teachers />} />
          <Route path="/createclass" element={<CreateClass />} />
          <Route path="/myclasses" element={<MyClasses />} />
          <Route path="/industry" element={<Industries />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
