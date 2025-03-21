import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <nav className="mx-auto px-8 py-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400">
              Christy Digital
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-white hover:text-violet-400 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-violet-400 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-violet-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
