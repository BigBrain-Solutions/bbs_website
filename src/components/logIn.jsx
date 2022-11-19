import React from "react";
import Close from "../graphics/close.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import SignUpPage from "./signUpPage";
import LogInPage from "./logInPage";

function LogIn(props) {

  const [on, setOn] = useState(false);

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
          <img
            src={Close}
            className="w-12 h-12 m-2 cursor-pointer transition ease-in-out delay-75 hover:scale-105"
          />
        </button>

        <div className="flex flex-row items-center justify-center h-full">
          <LogInPage on={on} setOn={setOn} />
          
          <SignUpPage on={on} setOn={setOn} />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
