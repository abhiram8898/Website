import { motion } from "framer-motion";
import contactUs from "../../../public/Mobile Marketing-pana.png";

export default function ContactUs() {
  return (
    <section className="text-white overflow-hidden min-h-screen w-screen flex items-center justify-center ">
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
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 text-center max-w-7xl mx-auto w-full ">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="w-full max-w-3xl mx-auto flex justify-center items-center"
        >
          <img src={contactUs} alt="" className="size-84" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-200 to-gray-300 animate-gradient px-4"
        >
          ILLUMINATE YOUR <br className="hidden sm:block" />
          <span className="inline-block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-500 to-emerald-500 animate-gradient-fast">
            MARKETING FUTURE
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-6 sm:mt-8 max-w-3xl mx-auto leading-relaxed font-light px-4"
        >
          Transform your digital presence with our data-driven strategies. We
          help ambitious businesses achieve exceptional growth through
          innovative marketing solutions tailored to deliver measurable results.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
        >
          <a
            href="mailto:contact@company.com"
            className="w-full sm:w-auto group px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-500 text-white text-base sm:text-lg font-bold rounded-full shadow-xl hover:shadow-violet-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2 text-black">
              Send us an Email
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-4 sm:top-8 right-4 sm:right-10 z-10 hidden md:flex items-center gap-4 sm:gap-8"
      >
        {["About", "Services", "Case Studies", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
            className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 hover:underline decoration-violet-500 underline-offset-4"
          >
            {item}
          </a>
        ))}
      </motion.nav>
    </section>
  );
}
