"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ใช้ useRouter จาก next/navigation ใน Next.js 13

function Video_foryou() {
  const [isClient, setIsClient] = useState(false); // สถานะเพื่อให้แน่ใจว่าใช้ใน client
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter(); // ใช้ useRouter จาก next/navigation

  useEffect(() => {
    // ตรวจสอบสถานะการยืนยันตัวตนจาก localStorage
    if (typeof window !== "undefined") {
      setIsClient(true); // เมื่อเป็น client แล้ว ให้ set เป็น true
      const authStatus = localStorage.getItem('authenticated');
      setIsAuthenticated(!!authStatus);
      if (!authStatus) {
        router.push('/'); // หากไม่ได้ login พาผู้ใช้ไปหน้า login
      }
    }
  }, [router]);

  if (!isClient) return null; // ถ้ายังไม่ได้เป็น client ให้ไม่ render อะไร

  return (
    <main className="flex min-h-screen flex-col container mx-auto bg-black">
      <section>
        <div className="flex flex-col items-center justify-center h-full mt-10">
          <h1 className="text-center text-4xl font-extrabold text-pink-400 shadow-lg">
            Welcome to My Video
          </h1>
          <video
            controls
            className="rounded-lg shadow-2xl w-auto h-full object-cover mt-8 border-4 border-pink-500"
          >
            <source src="/videos/my-word.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="px-12 mt-6 w-full sm:w-auto">
          <button
            aria-label="Go back to home"
            onClick={() => router.push('/')} // ใช้ router.push สำหรับการนำทาง
            className="px-8 py-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-600 to-pink-400 hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-700 text-white font-bold border-2 border-pink-500 mt-4 lg:mt-0 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            Comeback
          </button>
        </div>
      </section>
    </main>
  );
}

export default Video_foryou;
