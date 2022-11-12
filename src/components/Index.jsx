import React, { useState } from "react";
import Header from "./header";
import MainPage from "./mainpage";
import Settings from "./settings";

export default function Index() {
  const [settings, setSettings] = useState(false);
  return (
    <div>
      <div>
        <Header
          className="w-full"
          setSettings={setSettings}
          settings={settings}
        />

        <Settings trigger={settings} setTrigger={setSettings} />

        <MainPage className="w-full" />
      </div>
    </div>
  );
}
