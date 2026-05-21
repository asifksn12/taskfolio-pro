import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Handle Register
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert(response.data.message);

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    }

  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">

      <div className="glass w-full max-w-md p-10 rounded-[35px] relative overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10">

          <h1 className="text-4xl font-bold text-center gradient-text mb-3">
            Create Account
          </h1>

          <p className="text-gray-400 text-center mb-8">
            Register to continue your journey
          </p>

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="mb-5">

              <label className="block text-gray-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-slate-800/80 text-white border border-slate-700 outline-none focus:border-cyan-400"
                required
              />

            </div>

            {/* Email */}
            <div className="mb-5">

              <label className="block text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-slate-800/80 text-white border border-slate-700 outline-none focus:border-cyan-400"
                required
              />

            </div>

            {/* Password */}
            <div className="mb-6">

              <label className="block text-gray-300 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-slate-800/80 text-white border border-slate-700 outline-none focus:border-cyan-400"
                required
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full neon-btn py-3 rounded-xl font-semibold text-white"
            >
              Create Account
            </button>

          </form>

          <p className="text-gray-400 text-center mt-6">
            Already have an account?
          </p>

          <Link
            to="/login"
            className="block text-center text-cyan-400 mt-2 hover:text-cyan-300 transition"
          >
            Login Here
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;