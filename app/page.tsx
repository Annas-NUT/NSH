"use client";
import { HashRouter, Routes, Route } from "react-router-dom"; 
import Page from "./FirstPage/page";

export default function Home() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </HashRouter>
  );
}
