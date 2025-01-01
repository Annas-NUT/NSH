// PasswordPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PasswordPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const correctPassword = "15-09-2024"; // ตั้งรหัสผ่านที่ต้องการ

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      navigate('/Video_foryou'); // ถ้ารหัสถูกต้อง ให้ไปที่หน้า Video_foryou
    } else {
      setError('รหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="p-8 bg-opacity-80 rounded-lg shadow-lg w-80">
        <h2 className="text-xl mb-4 text-center">ใส่รหัสมาหน่อย คนขี้เสือก</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              placeholder="รหัสผ่าน"
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
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordPage;

