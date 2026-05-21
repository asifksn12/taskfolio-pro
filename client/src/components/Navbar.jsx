import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import logo from "../assets/logo.webp";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [clientOpen, setClientOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800 shadow-xl">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="logo"
            className="w-14 h-14 object-contain rounded-xl"
          />

          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ASIF
            </h1>

            <p className="text-gray-400 text-sm">
              NeoSkill Portfolio
            </p>
          </div>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">

          <Link
            className="hover:text-cyan-400 transition duration-300"
            to="/"
          >
            Home
          </Link>

          <Link
            className="hover:text-cyan-400 transition duration-300"
            to="/dashboard"
          >
            Dashboard
          </Link>

          {/* Dropdown */}
          <div className="relative">

            <button
              onClick={() => setClientOpen(!clientOpen)}
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              Clients
              <FaChevronDown className="text-xs" />
            </button>

            {clientOpen && (
              <div className="absolute right-0 mt-4 w-52 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl">

                <Link
                  to="/login"
                  className="block px-5 py-4 hover:bg-slate-800 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="block px-5 py-4 hover:bg-slate-800 transition"
                >
                  Register
                </Link>

              </div>
            )}

          </div>

        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-5 flex flex-col gap-5 text-white">

          <Link to="/">Home</Link>

          <Link to="/dashboard">Dashboard</Link>

          <div className="border-t border-slate-700 pt-5">

            <p className="text-cyan-400 mb-4 font-semibold">
              Clients
            </p>

            <div className="flex flex-col gap-3">

              <Link
                to="/login"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-center py-3 rounded-xl"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="border border-cyan-500 text-center py-3 rounded-xl"
              >
                Register
              </Link>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;