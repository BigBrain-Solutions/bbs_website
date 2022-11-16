import React from "react";
import Close from "../graphics/close.svg";
import Id from "../graphics/BBS_ID.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

function LogIn(props) {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className={`top-0 w-full h-full fixed border border-slate-700 dark:border-0 shadow-lg rounded-3xl bg-slate-800 dark:bg-gray-100 z-10
       ${
         props.trigger ? "right-0" : "right-[-2000px]"
       } ease-in-out duration-500`}
    >
      <div className="w-full h-full">
        <button
          className="absolute z-30 right-0"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          <img src={Close} className="w-12 h-12 m-2" />
        </button>

        <div className="flex flex-row items-center justify-center h-full">
          <div className="">
            <div className="">
              <input
                placeholder="username"
                className="p-2 m-1 w-[405px] text-sm rounded-lg block ] bg-slate-400 border border-gray-500 placeholder-gray-300 text-white dark:bg-gray-50 dark:border-gray-300 dark:placeholder-slate-400 dark:text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="p-2 m-1 mt-2 w-[405px] text-sm rounded-lg block ] bg-slate-400 border border-gray-500 placeholder-gray-300 text-white dark:bg-gray-50 dark:border-gray-300 dark:placeholder-slate-400 dark:text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  placeholder="password"
                  className="p-2 m-1 w-[198px] text-sm rounded-lg block ] bg-slate-400 border border-gray-500 placeholder-gray-300 text-white dark:bg-gray-50 dark:border-gray-300 dark:placeholder-slate-400 dark:text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(event) => {
                    setPassword(event.target.value);
                    console.log("email", event.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="confirm"
                  className="p-2 m-1 w-[198px] text-sm rounded-lg block ] bg-slate-400 border border-gray-500 placeholder-gray-300 text-white dark:bg-gray-50 dark:border-gray-300 dark:placeholder-slate-400 dark:text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <button className="p-3 m-1 w-36 bg-slate-400 text-sm rounded-lg font-semibold shadow-md ease-in-out hover:scale-105 dark:bg-slate-500 transform active:scale-100 transition-transform dark:text-gray-200 sm:block hidden" onClick={() => {
                  SignUp(username, mail, password)
                }}>
                Signup
              </button>
            </div>
          </div>

          <div>
            <img src={Id} alt="BBS Id" className="h-40 w-40" />
          </div>

        </div>
      </div>
    </div>
  );
}

const SignUp = (username, email, password) => {
  axios({
    method: 'post',
    url: '/auth',
    data: {
      username: username,
      email: email,
      password: password
    }
  });
}

export default LogIn;
