import React from "react";
import Homepage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/detail";
import Nav from "./Nav";
import Footer from "./pages/Footer";
import Login from "./pages/login";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/:detail" element={<Detail />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
