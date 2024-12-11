import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-[#dcf3f3] to-[#fcf8f8] flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold text-[#3F72AF] mb-6">
          Platformamizga xush kelibsiz!
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed text-lg">
          Har kuni qiladigan ishlaringizni yanada qulayroq va samaraliroq
          boshqarishga yordam beruvchi oddiy va tushunarli platformamizni kashf
          qiling. Bog‘lanish, o‘rganish yoki rivojlanish — hammasi shu yerda.
        </p>

        <p className="text-gray-600 mb-8 text-base">
          Bugun bizga qo‘shiling va imkoniyatlar dunyosini o‘rganishni boshlang.
          Boshlash uchun ro‘yxatdan o‘ting yoki tizimga kiring!
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/login">
            <button className="bg-[#3F72AF] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#345B8C] transition duration-200 font-semibold">
              Tizimga Kirish
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-[#88E0EF] text-gray-800 py-3 px-6 rounded-lg shadow-md hover:bg-[#5AC3D8] transition duration-200 font-semibold">
              Ro‘yxatdan O‘tish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
