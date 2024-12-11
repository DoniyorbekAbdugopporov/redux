import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { addToken } from "../../redux/slices/token-slice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.value);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const existingUser = users.find(
        (user) => user.username === formData.username
      );

      if (existingUser && existingUser.password === formData.password) {
        dispatch(addToken("Authenticated Token"));
        navigate("/admin");
      } else {
        toast.error("❌ Login yoki parol noto‘g‘ri!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    },
    [dispatch, formData, navigate, users]
  );

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-[#D9E4F5] to-[#f0f0f0]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 text-[#3F72AF]">
          Kirish
        </h2>

        <div className="mb-5">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-2"
          >
            Foydalanuvchi nomi
          </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            placeholder="Foydalanuvchi nomini kiriting"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F72AF]"
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
            type="password"
            name="password"
            id="password"
            required
            placeholder="Parolni kiriting"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3F72AF]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#3F72AF] text-white py-3 rounded-lg font-semibold hover:bg-[#345B8C] transition duration-200"
        >
          Kirish
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Hisobingiz yo‘qmi?{" "}
          <span
            className="text-[#3F72AF] font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Ro‘yxatdan o‘tish
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
