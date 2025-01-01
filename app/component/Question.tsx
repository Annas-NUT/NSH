"use client";
import React from "react";
import { Link } from "react-router-dom";

function Question() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <section className="flex flex-col items-center justify-center h-full mt-10">
        <div className="text-center">
          <h1 className="text-3xl">เป็นคนขี้เสือกอ่อเดี๋ยวนี้?</h1>
        </div>
        <div className="px-12 mt-4 w-full sm:w-auto">
          <Link to="/video">
            <button className="px-8 py-4 w-full sm:w-fit rounded-full mr-4 bg-white bg-gradient-to-br from-pink-500 to-white hover:bg-slate-800 text-black border-2 font-bold border-white mt-3 lg:mt-0 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              ใช่
            </button>
          </Link>
          <Link to="/">
            <button className="px-8 py-4 w-full sm:w-fit rounded-full mr-4 bg-white bg-gradient-to-br from-pink-500 to-white hover:bg-slate-800 text-black border-2 font-bold border-white mt-3 lg:mt-0 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              ไม่ใช่
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Question;
