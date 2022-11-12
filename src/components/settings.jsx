import React from "react";
import Close from "../graphics/close.svg";

function Settings(props) {
  return (
    <div
      className={`top-0 w-96 h-full fixed border border-slate-700 rounded-r-3xl bg-slate-800 z-10
       ${props.trigger ? "left-0" : "left-[-384px]"} ease-in-out duration-300`}
    >
      <button
        className=""
        onClick={() => {
          props.setTrigger(false);
        }}
      >
        <img src={Close} className="w-12 h-12 m-2" />
      </button>
    </div>
  );
}

export default Settings;
