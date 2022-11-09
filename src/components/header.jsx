import React from "react";
import Temp from "../images/temp.svg";

function Header() {
  return (
    <div className="justify-center w-full h-full flex flex-row bg-gray-600">
      <div className=" w-full">
        <img src={Temp} alt="" className="h-16 w-16" />
      </div>

      <div className="">
        <img src={Temp} alt="" className="" />
      </div>

      <div className="flex justify-self-end w-full">
        <div className="flex flex-row">
          <img src={Temp} alt="" className="h-16 w-16" />

          <button className="">Log in/Sign in </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
