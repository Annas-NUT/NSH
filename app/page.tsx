"use client"; // บอก Next.js ว่านี่คือลำดับที่ทำงานบน client side

import { HashRouter, Routes, Route } from "react-router-dom"; 
import Page from "./FirstPage/page";  // หน้าใหม่ที่ต้องการให้แสดง

export default function Home() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </HashRouter>
  );
}
