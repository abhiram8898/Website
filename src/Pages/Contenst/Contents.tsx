import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

export default function ContentStrategySection() {
  return (
    <section className="relative bg-black text-white overflow-hidden h-screen flex items-center justify-center">
      {/* Animated background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-black to-black animate-pulse" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-40 bg-repeat" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-pink-500/10" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-start relative z-10 max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="md:w-1/2"
        >
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-gray-300 animate-gradient">
            CONTENT THAT <br />
            <span className="inline-block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 animate-gradient-fast">
              DRIVES RESULTS
            </span>
          </h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mt-8 max-w-2xl leading-relaxed font-light"
          >
            Our content strategy services help you build meaningful connections
            with your audience through high-quality, tailored content. We craft
            messages that resonate, engage, and inspire action by understanding
            your audience's unique preferences.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-6"
          >
            <button className="group px-10 py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <span className="flex items-center gap-2">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-full md:w-1/2"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <DotLottieReact
                src="https://lottie.host/ff7c018c-8c94-4b84-87ef-17383a037d36/tqVGLuFh4N.lottie"
                loop
                autoplay
                speed={1}
                style={{ width: "100%", height: "400px" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-gradient-to-b from-orange-500 to-pink-500 rounded-full mt-2 animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
}
