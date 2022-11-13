import React from "react";
import User from "../graphics/user.svg";
import Product from "./product";
import Test from "./testObj"; 

function MainPage() {
  return (
    <div className="place-items-center flex flex-col mt-10 bg-slate-700 dark:bg-white">
      
      {/* <Test /> */}

      <Product />

      <Product />

      <Product />

      <Product />
    </div>
  );
}

export default MainPage;
