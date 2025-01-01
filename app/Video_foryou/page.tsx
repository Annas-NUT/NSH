"use client";
import React from "react";
import { Link } from "react-router-dom";

function Video_foryou() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <section>
        <div className="flex flex-col items-center justify-center h-full mt-10">
          <h1 className="text-center text-3xl">Welcome to My Video</h1>
          <video
            controls
            className="rounded-lg shadow-lg w-3/5 h-full object-cover"
          >
            <source src="/videos/my-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="px-12 mt-4 w-full sm:w-auto">
          <Link to="/">
            <button
              aria-label="Go back to home"
              className="px-8 py-4 w-full sm:w-fit rounded-full mr-4 bg-white bg-gradient-to-br from-pink-500 to-white hover:bg-slate-800 text-black border-2 font-bold border-white mt-3 lg:mt-0 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Comeback
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Video_foryou;