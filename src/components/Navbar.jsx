import { Link, useNavigate } from "react-router-dom";
import axiosSecure from "../axiosSecure";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await axiosSecure.post("/logout");
      logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-end gap-8">
        <Link
          to="/"
          className="text-white font-semibold text-lg hover:text-blue-400 transition duration-300 flex items-center gap-2"
        >
          <span className="text-xl">🏠</span>
          Home
        </Link>

        <Link
          to="/login"
          className="text-white font-semibold text-lg hover:text-blue-400 transition duration-300 flex items-center gap-2"
        >
          <span className="text-xl">🔐</span>
          Login
        </Link>

        <div className="flex items-center gap-3 pl-6 border-l border-gray-600">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition cursor-pointer">
            <span className="text-white text-xl font-bold">U</span>
          </div>
          <span className="text-white font-semibold hidden sm:inline">
            User
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
