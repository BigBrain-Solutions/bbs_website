import React, { useState } from "react";
import axios from "axios";
import Id from "../graphics/BBS_ID.svg";

function SignUpPage(props) {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className={`flex flex-row items-center justify-center h-full ${
        props.on ? "hidden" : ""
      }`}
    >
      <div className="">
        <div className="">
          <input
            placeholder="Username"
            className="p-2 m-1 w-[405px] text-sm font-semibold rounded-lg block ] bg-slate-400 border border-gray-500 placeholder-gray-200 text-white dark:bg-gray-50 dark:border-gray-300 dark:placeholder-slate-400 dark:text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => {
              setUsername(event.target.value);
              console.log("username", event.target.value);
            }}
            value={username}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            className="p-2 m-1 mt-2 w-[405px] text-sm font-semibold rounded-lg block ] bg-slate-400 border border-gray-500 placeholder-gray-200 text-white dark:bg-gray-50 dark:border-gray-300 dark:placeholder-slate-400 dark:text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            onChange={(event) => {
              setMail(event.target.value);
              console.log("email", event.target.value);
            }}
            value={mail}
          />
        </div>
        <div className="flex flex-row">
          <div>
            <input
              type="password"
              placeholder="Password"
              className="p-2 m-1 w-[198px] text-sm font-semibold rounded-lg block bg-slate-400 border border-gray-500 placeholder-gray-200 text-white dark:bg-gray-50 dark:border-gray-300 dark:placeholder-slate-400 dark:text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(event) => {
                setPassword(event.target.value);
                console.log("email", event.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm"
              className="p-2 m-1 w-[198px] text-sm font-semibold rounded-lg block bg-slate-400 border border-gray-500 placeholder-gray-200 text-white dark:bg-gray-50 dark:border-gray-300 dark:placeholder-slate-400 dark:text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="grid grid-rows-1 grid-flow-col">
          <button
            className="p-3 m-1 w-36 bg-slate-400 text-gray-200 text-sm rounded-lg font-bold shadow-md ease-in-out hover:scale-105 dark:bg-slate-500  "
            onClick={() => {
              SignUp(username, mail, password);
            }}
          >
            SignUp
          </button>

          <div className="grid grid-rows-2 grid-flow-row w-56 m-1 ">
            <div className="justify-self-end cursor-default text-gray-400 dark:text-gray-800">
              You alreadey have an account?
            </div>
            <div
              className="justify-self-end text-blue-500 hover:text-blue-400 font-semibold cursor-pointer"
              onClick={() => {
                if (props.on === false) {
                  props.setOn(true);
                } else {
                  props.setOn(false);
                }
              }}
            >
              Login!
            </div>
          </div>
        </div>
      </div>

      <div className="m-2">
        <img src={Id} alt="BBS Id" className="h-40 w-40" />
      </div>
    </div>
  );
}

const SignUp = (username, email, password) => {
  axios
    .put("https://194b-46-151-23-40.eu.ngrok.io/api/auth", {
      username: username,
      email: email,
      password: password,
    })
    .then((res) => {
      // TODO: Checking status code, if status == 200
    });
};

export default SignUpPage;
