import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { deleteUser } from "../../redux/slices/user-slice";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((s) => s.user.value);

  const handleEditUser = (id) => {
    navigate(`/register?id=${id}`);
  };

  const handleDelete = (id) => {
    const user = users.find((item) => item.id === id);

    if (!user) {
      return toast.error("❌ User not found!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    }

    if (confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(user.id));
      toast.success("✅ User deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.info("ℹ️ User deletion cancelled!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-center text-[#1D4ED8] mb-8">
        User Management
      </h1>
      {users.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {users.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="h-[100px] w-[100px] bg-gradient-to-br from-[#1D4ED8] to-[#1E40AF] rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-white">
                  {item.name?.charAt(0).toUpperCase()}
                  {item.username?.charAt(0).toUpperCase()}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-center text-[#1E40AF] mb-2">
                {item.name}
              </h2>
              <p className="text-center text-[#1D4ED8] mb-4 break-words">
                @{item.username}
              </p>
              <p className="text-center text-gray-500">
                Password: {item.password}
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditUser(item.id)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">
          No users available. Please create one.
        </p>
      )}
    </div>
  );
};

export default Admin;
