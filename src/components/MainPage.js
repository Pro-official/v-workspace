// import React, { useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import Navigation from "../pages/Shared/Navigation";
// import "./Mainpage.css";

// const MainPage = () => {
//   const [persons, setPersons] = useState([]);
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const nameRef = useRef();
//   const emailRef = useRef();
//   const typeRef = useRef();

//   useEffect(() => {
//     fetch("http://localhost:5000/users")
//       .then((res) => res.json())
//       .then((data) => setPersons(data));
//   }, []);

//   const handleUpdate = (e) => {
//     const name = nameRef.current.value;
//     const email = emailRef.current.value;
//     const type = typeRef.current.value;
//     const profile = { name, email, type };
//     console.log(profile);
//     e.preventDefault();

//     fetch(`http://localhost:5000/users/${email}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(profile),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount) {
//           alert("Profile Updated!");
//           navigate(`/${type}`);
//         }
//       });
//   };

//   return (
//     <>
//       <Navigation />
//       {persons
//         .filter((person) => person.email === user.email)
//         .map((person) =>
//           person.type ? (
//             navigate(`/${person.type}`)
//           ) : (
//             <div className="flex min-h-screen items-center justify-start bg-white">
//               <div className="mx-auto w-full max-w-lg">
//                 <h1 className="md:text-4xl text-2xl font-bold text-[#163A24]">
//                   Who are you?
//                 </h1>
//                 <p className="mt-3">
//                   Register yourself as a student, teacher or industry expart to
//                   get more personalised options
//                 </p>
//                 <form
//                   onSubmit={handleUpdate}
//                   key={person.email}
//                   className="mt-10"
//                 >
//                   <input
//                     type="hidden"
//                     name="access_key"
//                     value="YOUR_ACCESS_KEY_HERE"
//                   />
//                   <div className="grid gap-6 sm:grid-cols-2">
//                     <div className="relative z-0">
//                       <input
//                         type="text"
//                         name="name"
//                         ref={nameRef}
//                         className="peer block w-full appearance-none border-0 border-b border-[#163A24] bg-transparent py-2.5 px-0 text-sm text-[#163A24] focus:border-[#163A24]focus:outline-none focus:ring-0"
//                         placeholder="Name"
//                         defaultValue={person.displayName}
//                       />
//                       <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-[#163A24] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#163A24]">
//                         Your name
//                       </label>
//                     </div>
//                     <div className="relative z-0">
//                       <input
//                         type="text"
//                         name="email"
//                         ref={emailRef}
//                         className="peer block w-full appearance-none border-0 border-b border-[#163A24] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#163A24] focus:outline-none focus:ring-0"
//                         placeholder="email"
//                         defaultValue={person.email}
//                       />
//                       <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-[#163A24] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#163A24]">
//                         Your email
//                       </label>
//                     </div>
//                     <div className="relative z-0 col-span-2">
//                       <select
//                         name="type"
//                         rows="5"
//                         ref={typeRef}
//                         className="peer block w-full appearance-none border-0 border-b border-[#163A24] bg-transparent py-2.5 px-3 text-sm text-gray-900 focus:border-[#163A24] focus:outline-none focus:ring-0"
//                         placeholder=" "
//                       >
//                         <option value="student">Select User Type </option>
//                         <option value="student">Student</option>
//                         <option value="teacher">Teacher</option>
//                         <option value="industry">Industry</option>
//                       </select>
//                       <p className="mt-4 font-light text-sm">
//                         Select your user type. Once you select and update your
//                         profile, you have to visit{" "}
//                         <Link to="/updateprofile">
//                           <span className="font-xl font-bold text-[#163A24] underline underline-offset-2">
//                             This page
//                           </span>
//                         </Link>{" "}
//                         in order to update your user type.
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     type="submit"
//                     className="mt-5 rounded-md bg-[#163A24] px-10 py-2 text-white font-bold hover:bg-transparent hover:text-black border-[#163A24] border-2"
//                   >
//                     Update Profile
//                   </button>
//                 </form>
//               </div>
//             </div>
//           )
//         )}
//       ;
//     </>
//   );
// };

// export default MainPage;
