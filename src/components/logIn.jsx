import React from "react";
import Close from "../graphics/close.svg";
import Id from "../graphics/BBS_ID.svg";
import { motion } from "framer-motion";

function LogIn(props) {
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
                className="p-2 m-1 border-black border rounded-lg"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[405px] p-2 m-1 dark:bg-slate-500 dark:border-gray-500 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-row">
              <div>
                <input
                  type="password"
                  placeholder="password"
                  className="p-2 m-1 border-black border rounded-lg"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="confirm"
                  className="p-2 m-1 border-black border rounded-lg"
                />
              </div>
            </div>
            <div>
              <button className="p-3 m-1 w-36 bg-slate-400 text-sm rounded-lg font-semibold shadow-md ease-in-out hover:scale-105 dark:bg-slate-500 transform active:scale-100 transition-transform dark:text-gray-200 sm:block hidden">
                {" "}
                Register
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

export default LogIn;
