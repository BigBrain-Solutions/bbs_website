import React, { useState } from "react";
import Close from "../graphics/close.svg";
import { motion } from "framer-motion";
import Moon from "../graphics/moon.svg";
import Sun from "../graphics/sun.svg";

function Settings(props) {
  const [isOn, setIsOn] = useState(false);

  const toogleDarkMode = () => {

    setIsOn(!isOn);

    if (isOn) {

      localStorage.removeItem('theme')
      localStorage.theme = 'light'

      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark' 
      
    }
  }

  return (
    <div
      className={`top-0 w-64 h-full fixed border-r border-slate-700 dark:border-0 shadow-lg rounded-r-3xl bg-slate-800 dark:bg-gray-100 z-10
       ${props.trigger ? "left-0" : "left-[-384px]"} ease-in-out duration-300`}
    >
      <button
        onClick={() => {
          props.setTrigger(false);
        }}
      >
        <img src={Close} className="w-12 h-12 m-3 cursor-pointer transition ease-in-out delay-75 hover:scale-105" />
      </button>

      <div className="flex flex-col h-full">
        <div className="h-screen"></div>

          <div className="flex flex-row h-36 justify-end mb-2 p-5">
            <div
              className={`h-40 w-16 flex justify-between ${
                isOn ? "flex-col" : "flex-col-reverse"
              } `}
            >
              <motion.div
                className="w-16 h-16 rounded-2xl "
                layout
                transition={spring}
              >
                <img src={Sun} className="w-12 h-12" />
              </motion.div>

              <motion.div
                className="w-16 h-16 rounded-2xl "
                layout
                transition={spring}
              >
                <img src={Moon} className="h-12 w-12" />
              </motion.div>
            </div>

            <div
              className={`w-20 h-10 bg-slate-600 flex justify-start rounded-full p-2 mt-1 cursor-pointer ${
                isOn ? "justify-end " : " "
              }`}
              isOn={isOn}
              onClick={toogleDarkMode}
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full"
                layout
                transition={spring}
              />
            </div>
          </div>
        </div>
      </div>

  );
}

const spring = {
  type: "spring",
  stiffness: 900,
  damping: 30,
};

export default Settings;
