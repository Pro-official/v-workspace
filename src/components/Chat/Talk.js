// import React, { useState, useEffect } from "react";
// // import queryString from "query-string";
// import io from "socket.io-client";

// import TextContainer from "../TextContainer/TextContainer";
// import Messages from "../Messages/Messages";
// import InfoBar from "../InfoBar/InfoBar";
// import Input from "../Input/Input";

// import "./Chat.css";
// import { useSearchParams } from "react-router-dom";

// const ENDPOINT = "http://localhost:4000/";

// let socket;

// const Talk = ({ location }) => {
//   const [email, setEmail] = useState("");
//   const [room, setRoom] = useState("");
//   const [users, setUsers] = useState("");
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [searchParams] = useSearchParams();

//   console.log(searchParams);
//   useEffect(() => {
//     // const { email, room } = queryString.parse(location.search);

//     socket = io(ENDPOINT);

//     setRoom(room);
//     setEmail(email);

//     socket.emit("join", { email, room }, (error) => {
//       if (error) {
//         alert(error);
//       }
//     });
//   }, []);

//   useEffect(() => {
//     socket.on("message", (message) => {
//       setMessages((messages) => [...messages, message]);
//     });

//     socket.on("roomData", ({ users }) => {
//       setUsers(users);
//     });
//   }, []);

//   const sendMessage = (event) => {
//     event.preventDefault();

//     if (message) {
//       socket.emit("sendMessage", message, () => setMessage(""));
//     }
//   };

//   return (
//     <div className="outerContainer">
//       <div className="container">
//         <InfoBar room={room} />
//         <Messages messages={messages} email={email} />
//         <Input
//           message={message}
//           setMessage={setMessage}
//           sendMessage={sendMessage}
//         />
//       </div>
//       <TextContainer users={users} />
//     </div>
//   );
// };

// export default Talk;
