import React from "react";
import Header from "./header";
import MainPage from "./mainpage";

export default function Index() {
  return (
    <div>
      <div>
        <Header className="w-full" />

        <MainPage className="w-full" />
      </div>
    </div>
  );
}
