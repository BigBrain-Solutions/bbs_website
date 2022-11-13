import React from "react";
import LogoText from "../graphics/BBS_text.svg";
import Settings from "../graphics/settings.svg";
import UserL from "../graphics/user_light.svg";

function Header(props) {
  return (
    <div className="w-full h-full flex flex-row bg-slate-800 dark:bg-slate-300 p-1">
      <div className="w-1/3 self-center">
        <button
          onClick={() => {
            if (props.settings === false) {
              props.setSettings(true);
            } else {
              props.setSettings(false);
            }
          }}
        >
          <img
            src={Settings}
            className="h-12 w-12 ml-1 pt-1 cursor-pointer transition ease-in-out delay-75 hover:scale-105"
            alt="settings"
          />
        </button>
      </div>

      <div className="w-1/3">
        <div className="flex justify-center">
          <img src={LogoText} alt="" />
        </div>
      </div>

      <div className="w-1/3">
        <div className="flex flex-row justify-end">
          <img src={UserL} alt="" className="h-10 w-10 self-center" />

          <button className="m-2 bg-slate-400 p-2 text-sm rounded-lg font-semibold ease-in-out hover:scale-105 dark:bg-slate-500 transform active:scale-100 transition-transform">
            Sign in / Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
