import React, { useState } from "react";
import Header from "./header";
import MainPage from "./mainpage";
import Settings from "./settings";
import LogIn from "./logIn";

export default function Index() {
  const [settings, setSettings] = useState(false);
  const [logIn, setLogIn] = useState(false);
  return (
    <div>
      <div>
        <Header
          className="w-full"
          setSettings={setSettings}
          settings={settings}
          setLogIn={setLogIn}
          logIn={logIn}
        />

        <Settings trigger={settings} setTrigger={setSettings} />

        <LogIn trigger={logIn} setTrigger={setLogIn} />

        <MainPage className="w-full" />
      </div>
    </div>
  );
}
