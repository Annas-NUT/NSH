"use client";
import { HashRouter, Routes, Route } from "react-router-dom"; 
import Page from "./FirstPage/page";
import Video_foryou from "./Video_foryou/page";
import PasswordPage from "./Password/page";

export default function Home() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="Video_foryou" element={<Video_foryou />} />
        <Route path="Password" element={<PasswordPage />} />
      </Routes>
    </HashRouter>
  );
}
