import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let postsData = [
  {
    id: 1,
    message: "Hi, how are u?",
    likesCount: 15,
  },
  {
    id: 2,
    message: "It's my first post",
    likesCount: 12,
  },
];

let dialogsData = [
  {
    id: 1,
    name: "Dima",
  },
  {
    id: 2,
    name: "Andrew",
  },
  {
    id: 3,
    name: "Sveta",
  },
  {
    id: 4,
    name: "Sasha",
  },
  {
    id: 5,
    name: "Ola",
  },
  {
    id: 6,
    name: "Viktor",
  },
];

let messagesData = [
  {
    id: 1,
    message: "Hi",
  },
  {
    id: 2,
    message: "Hi Hi",
  },
  {
    id: 3,
    message: "How are u?",
  },
  {
    id: 4,
    message: "Hi",
  },
  {
    id: 5,
    message: "How are u?",
  },
  {
    id: 6,
    message: "Hi Hi",
  },
];

ReactDOM.render(
  <App
    postsData={postsData}
    dialogsData={dialogsData}
    messagesData={messagesData}
  />,
  document.getElementById("root")
);
