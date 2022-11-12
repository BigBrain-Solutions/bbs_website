import React from "react";
import Temp from "../graphics/temp.svg";
import User from "../graphics/user.svg";
import UserL from "../graphics/user_light.svg";

function Header() {
  return (
    <div className="w-full h-full flex flex-row bg-slate-800 p-2">
      <div className="w-1/3">
        <img src={Temp} alt="" className="h-12 w-12" />
      </div>

      <div className="w-1/3">
        <div className="flex justify-center">
          <img src={Temp} alt="" />
        </div>
      </div>

      <div className="w-1/3">
        <div className="flex flex-row justify-end">
          <img src={UserL} alt="" className="h-12 w-12 mt-1" />

          <button className="m-2 bg-slate-400 p-2 rounded-lg font-semibold transition ease-in-out delay-75 hover:bg-slate-500 ">
            Sign in / Sign up{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
