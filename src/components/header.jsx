import React from "react";
import Temp from "../images/temp.svg";

function Header() {
  return (
    <div className="w-full h-full flex flex-row bg-gray-600 p-4">
      <div className="w-1/3">
        <img src={Temp} alt="" className="h-16 w-16" />
      </div>

      <div className="w-1/3">
        <div className="flex justify-center">
          <img src={Temp} alt=""  />
        </div>
      </div>

      <div className="w-1/3">
        <div className="flex flex-row justify-end">
          <img src={Temp} alt="" className="h-16 w-16" />

          <button className="m-2 bg-gray-400 p-2 rounded-lg font-semibold hover:bg-gray-500">Sign in / Sign up </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
