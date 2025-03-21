import { motion } from "framer-motion";
import consulting from "../../../public/Marketing consulting-cuate-min.png";

export default function About() {
  return (
    <section className="w-screen h-screen bg-black text-white overflow-hidden flex items-center justify-center">
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
              opacity: Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto relative z-10 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black animate-pulse" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" />
        </div>

        {/* Main content */}
        <div className="relative z-10 px-4 md:px-12 w-full md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 animate-gradient">
            READY TO <br />
            <span className="inline-block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400">
              ILLUMINATE YOUR PATH?
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-8 max-w-2xl leading-relaxed">
            Let's bring clarity to your digital strategy and drive meaningful
            results. Reach out to us today and discover how Christy digital
            strategies can effectively illuminate your path to lasting success.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-start gap-4">
            <button
              onClick={() =>
                (window.location.href = "mailto:chrisjus611@gmail.com")
              }
              className="px-8 py-4 bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 text-white text-base font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span>Email Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white text-base font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-full md:w-1/2"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 rounded-3xl blur-xl opacity-25" />
            <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <img
                src={consulting}
                alt="Marketing consulting illustration"
                className="w-full h-auto object-contain max-h-[600px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
