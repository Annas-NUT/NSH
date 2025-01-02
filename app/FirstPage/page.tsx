"use client"; // บอก Next.js ว่านี่คือลำดับที่ทำงานบน client side

import { TypeAnimation } from 'react-type-animation';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // ใช้ Image จาก next/image

export default function Page() {
    const [image, setImage] = useState('/image/image6.jpg'); // เริ่มต้นด้วยรูปภาพแรก
    const images = [
        '/image/image7.jpg',
        '/image/image6.jpg',
        '/image/image1.jpg',
        '/image/image4.jpg',
        '/image/image5.jpg',
        '/image/image8.jpg',
        '/image/image9.jpg',
        '/image/image10.jpg',
        '/image/image11.jpg',
        '/image/image12.jpg',
        '/image/image13.jpg'
    ];

    // ใช้ useEffect สำหรับการทำงานกับ DOM หลังจากที่ component ถูก render
    useEffect(() => {
      // ตรวจสอบว่าผู้ใช้ใช้งานใน client side หรือไม่
      if (typeof window !== 'undefined') {
        let index = 0;
        const intervalId = setInterval(() => {
          setImage(images[index]);
          index = (index + 1) % images.length; // เปลี่ยน index และวนกลับที่ 0 เมื่อครบ
        }, 2000); // ทุกๆ 2000 มิลลิวินาที (2 วินาที)
  
        // การล้าง interval เมื่อ component ถูก unmount
        return () => clearInterval(intervalId);
      }
    }, [images]); // เพิ่ม images ใน dependency array
    
    return (
      <main className="flex min-h-screen flex-col container mx-auto">
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="col-span-8 place-self-center text-center sm:text-left">
              <h1 className="text-white mx-auto px-12 md:py-4 mb-4 text-7xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-pink-300 text-5xl">
                  To... Naseehah
                  <br />
                </span>
                <TypeAnimation
                  sequence={[
                    "Cheko",
                    2000,
                    "Masea",
                    500,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-white text-xl sm:text-2xl px-12 mb-6 font-bold">
                Congratulations on receiving your gown coat today, it is another big step in your journey, and I know you will do well as always, because I have seen how hard you work and how strong you are. I am very proud of you and I will be with you every step of your success after this and be yourself, do not pay too much attention to your friends and do not cry too much. You have shown that you can get through it all. You are amazing, and if you want to consult anything.  Just talk to me. <br /><br />
                <span className='font-extrabold text-xl md:text-3xl text-pink-600'>love you</span>
              </p>
            </div>
            <div className="col-span-4 place-self-center mt-4 mb-6">
              <Image
                src={image} 
                alt="Changing images" 
                height={200} 
                width={250} 
                className="shadow-pink-800 shadow-[0px_0px_30px_4px] rounded-3xl object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    );
}

