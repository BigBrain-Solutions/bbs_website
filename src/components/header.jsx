import React from "react";
import Temp from "../graphics/temp.svg";
import Settings from "../graphics/settings.svg";
import UserL from "../graphics/user_light.svg";

function Header() {
  return (
    <div className="w-full h-full flex flex-row bg-slate-800 p-1">
      <div className="w-1/3 self-center">
        <img
          src={Settings}
          alt=""
          className="h-10 w-10 ml-1 cursor-pointer transition ease-in-out delay-75 hover:scale-105"
        />
      </div>

      <div className="w-1/3">
        <div className="flex justify-center">
          <img src={Temp} alt="" />
        </div>
      </div>

      <div className="w-1/3">
        <div className="flex flex-row justify-end">
          <img src={UserL} alt="" className="h-10 w-10 self-center" />

          <button className="m-2 bg-slate-400 p-2 text-sm rounded-lg font-semibold transition ease-in-out delay-75 hover:bg-slate-500 ">
            Sign in / Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
