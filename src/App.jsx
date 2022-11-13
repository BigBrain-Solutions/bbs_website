import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";

export default function App() {
  return <div className="bg-slate-700 dark:bg-slate-200 min-h-screen">
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Index/>} />
          {/* <Route path="/Oauth" element={<OAuth/>} /> */}
      </Routes>
    </BrowserRouter>
  </div>
}
