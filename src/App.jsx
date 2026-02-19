import React, { useState } from "react";
import Homepage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/detail";
import Nav from "./Nav";
import Footer from "./pages/Footer";
import Login from "./pages/login";

export default function App() {
    const [dark, setDark] = useState(false);
  
  return (
    <div className={`overflow-hidden ${dark ? "dark" : ""} dark:bg-[#202C36] dark:text-white`}>
      <Nav dark={dark} setDark={setDark}/>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/:detail" element={<Detail />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
