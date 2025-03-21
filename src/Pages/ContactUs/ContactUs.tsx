import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section className=" text-white overflow-hidden min-h-screen w-screen flex items-center justify-center fixed top-0 left-0">
      {/* Animated background with parallax effect */}

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 md:px-12 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <DotLottieReact
            src="https://lottie.host/73aa0bea-6f91-442d-927e-0813231ca2cd/F5APCMf7Ud.lottie"
            loop
            autoplay
            speed={1}
            style={{ width: "100%", height: "300px" }}
          />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-200 to-gray-300 animate-gradient"
        >
          ILLUMINATE YOUR <br />
          <span className="inline-block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-500 to-emerald-500 animate-gradient-fast">
            MARKETING FUTURE
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Transform your digital presence with our data-driven strategies. We
          help ambitious businesses achieve exceptional growth through
          innovative marketing solutions tailored to deliver measurable results.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group px-10 py-5 bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-500 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-violet-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <span className="flex items-center gap-2">
              Start Free Audit
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
          <button className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all duration-300 hover:border-violet-500/50">
            Watch Demo
          </button>
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-8 right-10 z-10 hidden md:flex items-center gap-8"
      >
        {["About", "Services", "Case Studies", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
            className="text-base text-gray-300 hover:text-white transition-colors duration-300 hover:underline decoration-violet-500 underline-offset-4"
          >
            {item}
          </a>
        ))}
      </motion.nav>
    </section>
  );
}
