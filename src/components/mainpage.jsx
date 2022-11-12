import React from "react";
// import Forest from "../graphics/foggy_forest.jpg";
import User from "../graphics/user.svg";

function MainPage() {
  return (
    <div className="place-items-center flex flex-col mt-10 bg-slate-700">
      <div className="w-2/4 p-2 m-4 flex flex-row rounded-2xl bg-slate-900 cursor-pointer transition ease-in-out delay-75 shadow-sm hover:shadow-xl hover:shadow-slate-800 hover:scale-105">
        <img src={User} alt="" className="flex justify-sefl-start" />
        <div className="p-2">
          <div className="text-white font-semibold text-lg">
            This is a title
          </div>
          <div className="text-white text-sm ">
            This is a short descrioption written by me the creator of the
            website
          </div>
        </div>
      </div>

      <div className="w-2/4 p-2 m-4 flex flex-row rounded-2xl bg-slate-900 cursor-pointer transition ease-in-out delay-75 shadow-sm hover:shadow-xl hover:shadow-slate-800 hover:scale-105">
        <img src={User} alt="" className="flex justify-sefl-start" />
        <div className="p-2">
          <div className="text-white font-semibold text-lg">
            This is a title
          </div>
          <div className="text-white text-sm ">
            This is a short descrioption written by me the creator of the
            website
          </div>
        </div>
      </div>

      <div className="w-2/4 p-2 m-4 flex flex-row rounded-2xl bg-slate-900 cursor-pointer transition ease-in-out delay-75 shadow-sm hover:shadow-xl hover:shadow-slate-800 hover:scale-105">
        <img src={User} alt="" className="flex justify-sefl-start" />
        <div className="p-2">
          <div className="text-white font-semibold text-lg">
            This is a title
          </div>
          <div className="text-white text-sm ">
            This is a short descrioption written by me the creator of the
            website
          </div>
        </div>
      </div>

      <div className="w-2/4 p-2 m-4 flex flex-row rounded-2xl bg-slate-900 cursor-pointer transition ease-in-out delay-75 shadow-sm hover:shadow-xl hover:shadow-slate-800 hover:scale-105">
        <img src={User} alt="" className="flex justify-sefl-start" />
        <div className="p-2">
          <div className="text-white font-semibold text-lg">
            This is a title
          </div>
          <div className="text-white text-sm ">
            This is a short descrioption written by me the creator of the
            website
          </div>
        </div>
      </div>

      {/* <div className="w-full h-80%">
                <img src={Forest} alt="foggy forest" className="w-full"/>
            </div> */}
    </div>
  );
}

export default MainPage;
