import { useState } from "react";
import Swal from "sweetalert2";
import { FaArrowLeft, FaEnvelope } from "react-icons/fa";
import axiosSecure from "../../axiosSecure";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosSecure.post("/forget-password", { email });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: res.data.message,
      });

      setEmail("");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: err.response?.data?.message || "Something went wrong.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <Link
        to="/login"
        className="absolute top-6 left-6 md:left-10 md:top-8 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 font-semibold text-sm transition-colors duration-200 group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Back to Login
      </Link>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-slate-700 backdrop-blur-sm relative z-10"
      >
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-3 dark:from-blue-400 dark:to-blue-300">
            Forgot Password
          </h1>
          <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
            Don't worry! Enter your email address and we'll send you a link to
            reset your password.
          </p>
        </div>

        <div className="relative mb-6 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg opacity-0 group-focus-within:opacity-100 transition duration-300 blur"></div>
          <div className="relative flex items-center border border-gray-300 dark:border-slate-600 group-focus-within:border-blue-500 rounded-lg px-4 py-3 bg-gray-50 dark:bg-slate-800 transition-all duration-200">
            <FaEnvelope className="text-blue-600 dark:text-blue-400 mr-3" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none text-gray-700 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-500 text-sm"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-blue-500/50"
        >
          Send Reset Link
        </button>

        <p className="text-center text-gray-600 dark:text-slate-500 text-xs mt-6">
          Check your email for a password reset link
        </p>
      </form>
    </div>
  );
}
