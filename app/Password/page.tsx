"use client";
// ใช้ next/link แทนการใช้ useRouter
import { useState } from 'react';

function PasswordPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const correctPassword = "15-09-2024";

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password === correctPassword) {
      localStorage.setItem('authenticated', 'true');
      // เปลี่ยนจาก useRouter ไปใช้ Link
      window.location.href = '/Video_foryou';  // ใช้ window.location.href เพื่อเปลี่ยนเส้นทาง
    } else {
      setError('รหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="p-8 bg-opacity-80 rounded-lg shadow-lg w-80">
        <h2 className="text-xl mb-4 text-center">Enter the Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordPage;
