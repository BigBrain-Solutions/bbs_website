import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import User from "../graphics/user.svg";

function Product() {
  return (
    <div className="w-2/4 p-2 m-4 flex flex-row rounded-2xl bg-slate-900 dark:bg-gray-100 cursor-pointer transition ease-in-out delay-75 shadow-md hover:shadow-xl hover:shadow-slate-800 hover:scale-105 dark:hover:shadow-gray-600">
      <img src={User} alt="" className="flex justify-sefl-start" />
      <div className="p-2">
        <div className="text-white dark:text-black font-semibold text-lg">
          This is a title
        </div>
        <div className="text-white dark:text-black text-sm ">
          This is a short descrioption written by me the creator of the website
        </div>
      </div>
    </div>
  );
}

export default Product;
