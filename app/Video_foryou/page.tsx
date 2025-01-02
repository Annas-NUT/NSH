"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function Video_foryou() {
  const [isClient, setIsClient] = useState(false);  // สร้าง state เพื่อบอกว่าโค้ดทำงานใน client-side
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);  // อัปเดต state เมื่ออยู่ใน client-side
      const isAuthenticated = localStorage.getItem('authenticated');
      if (!isAuthenticated) {
        router.push('/');  // ถ้าไม่ได้ยืนยันตัวตน, พาผู้ใช้กลับไปหน้า login
      }
    }
  }, [router]);

  if (!isClient) return null; // ไม่ให้ render อะไรในฝั่ง server

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
            onClick={() => router.push('/')}
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
