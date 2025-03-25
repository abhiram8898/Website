import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <footer className="bg-black/80 backdrop-blur-lg shadow-lg mt-auto px-2">
      <div className="mx-auto px-4 sm:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Column */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex justify-center md:justify-start"
          >
            <Link
              to="/"
              className="flex items-center"
              aria-label="Go to homepage"
            >
              <p className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 hover:brightness-110 transition-all">
                Christy Digital
              </p>
            </Link>
          </motion.div>

          {/* Navigation Column */}
          <nav className="flex flex-row justify-center items-center space-x-4">
            {["Services", "About", "Contact"].map((item) => (
              <motion.div
                key={item}
                variants={linkVariants}
                whileHover="hover"
                className="cursor-pointer"
              >
                <Link
                  to={item === "Services" ? "/" : `/${item.toLowerCase()}`}
                  className="relative group"
                  aria-label={`Go to ${item} page`}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 transition-all duration-300 text-lg hover:brightness-110">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Social Links Column */}
          <div className="flex flex-col items-center md:items-end text-sm text-gray-400">
            <p className="hover:text-gray-300 transition-colors">
              © {new Date().getFullYear()} Christy Digital. All rights reserved.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-violet-400 transition-colors"
                aria-label="Follow us on Twitter"
              >
                Twitter
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-violet-400 transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                LinkedIn
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
