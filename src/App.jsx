import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import SignUpPage from "./components/signUpPage";

export default function App() {
  return <div className="bg-slate-700 dark:bg-white min-h-screen">
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/SignIn' element={<SignUpPage/>} />
          {/* <Route path="/Oauth" element={<OAuth/>} /> */}
      </Routes>
    </BrowserRouter>
  </div>
}
