import { Link, useNavigate } from "react-router-dom";
import axiosSecure from "../axiosSecure";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  
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
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-white font-bold text-xl hover:text-blue-400 transition duration-300 flex items-center gap-2"
        >
          <span className="text-2xl">📝</span>
          Blogs
        </Link>

        <div className="flex items-center gap-8">
          {user ? (
            <>
              <div className="flex items-center gap-3 pl-6 border-l border-slate-700">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">
                    {user.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-white font-semibold hidden sm:inline">
                  {user.name}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 flex items-center gap-2"
              >
                <span>🚪</span>
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 flex items-center gap-2"
            >
              <span>🔐</span>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
