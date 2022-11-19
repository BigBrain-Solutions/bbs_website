import React, { useState } from "react";
import axios from "axios";
import Id from "../graphics/BBS_ID.svg";

function LogInPage(props) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={`flex flex-row items-center justify-center h-full ${
      props.on ? "" : "hidden"
    }`}
  >
      <div className="">
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
        <div>
          <input
            type="password"
            placeholder="password"
            className="p-2 m-1 mt-2 w-[405px] text-sm rounded-lg block ] bg-slate-400 border border-gray-500 placeholder-gray-300 text-white dark:bg-gray-50 dark:border-gray-300 dark:placeholder-slate-400 dark:text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => {
              setPassword(event.target.value);
              console.log("email", event.target.value);
            }}
          />
        </div>
        <div className="grid grid-rows-1 grid-flow-col ">
          <button
            className="p-3 m-1 w-36 bg-slate-400 text-gray-200 text-sm rounded-lg font-bold shadow-md ease-in-out hover:scale-105 dark:bg-slate-500  "
            onClick={() => {
              LogIn(mail, password);
            }}
          >
            Login
          </button>

          <div className="grid grid-rows-2 grid-flow-row w-56 m-1 ">
            <div className="justify-self-end cursor-default text-gray-400 dark:text-gray-800">
              You don't have an account?
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
              Signup!
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

const LogIn = (email, password) => {
  axios
    .post("https://194b-46-151-23-40.eu.ngrok.io/api/auth", {
      email: email,
      password: password,
    }, {
      headers:{
        "cid": ""
      }
    }
    )
    .then((res) => {
      localStorage.token = res.data.accessToken;
      UserCredentials(res.data.accessToken);
    });
};

const UserCredentials = (token) => {
  axios
    .get("https://194b-46-151-23-40.eu.ngrok.io/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      localStorage.profile = JSON.stringify(res.data);
    });
};

export default LogInPage;
