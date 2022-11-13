import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import User from "../graphics/user.svg";

export default function Test() {
  return (
    <AnimateSharedLayout>
      <motion.div className="w-full" layout>
        {items.map((item) => (
          <Item key={item} />
        ))}
      </motion.div>
    </AnimateSharedLayout>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      layout
      onClick={toggleOpen}
      className={`w-2/4 p-2 m-4 flex flex-row rounded-2xl bg-slate-900 dark:bg-gray-100 cursor-pointer transition ease-in-out delay-75 shadow-md hover:shadow-xl hover:shadow-slate-800 hover:scale-105 dark:hover:shadow-gray-600`}
    >
      <img src={User} alt="" className="flex justify-sefl-start h-16 w-16" />
      <div className="p-2">
        <div className="text-white dark:text-black font-semibold text-lg">
          This is a title
        </div>

        {!isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            <AnimatePresence>
              <div className="text-white dark:text-black text-sm ">
                This is a short descrioption written by me the creator of the
                website
              </div>
            </AnimatePresence>
          </motion.div>
        )}

        <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </div>
    </motion.div>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-white dark:text-black text-sm ">
        {" "}
        This is a qite bit longer descriptoin of the product. It is still
        written by me, the autor of this website. It's build from a few
        sentences and is still too short to check if the space we created is
        enough. In neer futurethe space below will contain a button wihch should
        redirect you to our GitHub page.{" "}
      </div>
    </motion.div>
  );
}

const items = [0];
