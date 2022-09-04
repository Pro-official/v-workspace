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
import JoinedClasses from "./components/JoinedClasses";
import PostWork from "./components/PostWork";
import Workspace from "./components/Workspace";
import Assign from "./components/Assign";
import Talk from "./components/Chat/Talk";
import AssignInClass from "./components/AssignInClass/AssignInClass";
import IndividualClass from "./components/Shared/IndividualClass";
import Announcement from "./components/Announcement";
import AssignedPosts from "./components/AssignedPosts";
import SubmitAssignment from "./components/SubmitAssignment";
import Submissions from "./components/Submissions";

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
          <Route path="/joinedclasses" element={<JoinedClasses />} />
          <Route path="/teacher" element={<Teachers />} />
          <Route path="/createclass" element={<CreateClass />} />
          <Route path="/myclasses" element={<MyClasses />} />
          <Route
            path="myclasses/:id/assign-in-class"
            element={<AssignInClass />}
          />
          <Route
            path="/myclasses/classroom/:code"
            element={<IndividualClass />}
          />
          <Route
            path="/myclasses/classroom/:code/assigedposts"
            element={<AssignedPosts />}
          />
          <Route
            path="myclasses/classroom/announcement/:code"
            element={<Announcement />}
          />
          <Route path="/myclasses/classroom/:code/talk" element={<Talk />} />
          <Route
            path="/myclasses/classroom/submit/:postID"
            element={<SubmitAssignment />}
          />
          <Route
            path="/myclasses/classroom/submissions/:postID"
            element={<Submissions />}
          />
          <Route path="/industry" element={<Industries />} />
          <Route path="/postwork" element={<PostWork />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path=":id/assign-teacher" element={<Assign />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
