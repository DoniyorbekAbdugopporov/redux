import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../../redux/slices/user-slice";
import { toast, Bounce } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const initialState = {
  name: "",
  username: "",
  password: "",
};

const Register = () => {
  const users = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(initialState);

  const paramsId = new URLSearchParams(useLocation().search).get("id");

  useEffect(() => {
    if (paramsId) {
      const userToUpdate = users.find((item) => item.id === parseInt(paramsId));
      if (userToUpdate) {
        setData(userToUpdate);
      }
    }
  }, [paramsId, users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      users.some(
        (user) =>
          user.username === data.username && user.id !== parseInt(paramsId)
      )
    ) {
      return toast.error("❌ Foydalanuvchi allaqachon mavjud!", {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
        transition: Bounce,
      });
    }

    if (paramsId) {
      dispatch(editUser({ ...data, id: parseInt(paramsId) }));
      toast.success("✅ Ma'lumotlar muvaffaqiyatli yangilandi!", {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      dispatch(addUser({ ...data, id: Date.now() }));
      toast.success("✅ Ro'yxatga olish muvaffaqiyatli!", {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
        transition: Bounce,
      });
    }

    setData(initialState);
    navigate("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-[#f7f5f4] to-[#e8e5e5]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 text-[#5D3FD3]">
          {paramsId ? "Ma'lumotlarni Yangilash" : "Ro'yxatdan O'tish"}
        </h2>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            To‘liq Ism
          </label>
          <input
            required
            id="name"
            name="name"
            type="text"
            placeholder="To‘liq ismingizni kiriting"
            value={data.name}
            onChange={handleChange}
            className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D3FD3]"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-2"
          >
            Foydalanuvchi nomi
          </label>
          <input
            required
            id="username"
            name="username"
            type="text"
            placeholder="Foydalanuvchi nomini kiriting"
            value={data.username}
            onChange={handleChange}
            className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D3FD3]"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Parol
          </label>
          <input
            required
            id="password"
            name="password"
            type="password"
            placeholder="Parolni kiriting"
            value={data.password}
            onChange={handleChange}
            className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D3FD3]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#5D3FD3] text-white py-3 rounded-lg font-semibold hover:bg-[#4B2AA7] transition-all"
        >
          {paramsId ? "Yangilash" : "Ro'yxatdan O'tish"}
        </button>
      </form>
    </div>
  );
};

export default Register;
