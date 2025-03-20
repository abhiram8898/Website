import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

const seoServices = [
  {
    title: "KEYWORD RESEARCH & STRATEGY",
    description: "Identifying the most valuable keywords for your business.",
    icon: "https://lottie.host/4a26b5c7-37f4-4c1d-b5f3-c272c6cd2ab4/xJuGh4IXQZ.lottie",
  },
  {
    title: "ON-PAGE OPTIMIZATION",
    description:
      "Improving your site's content and structure for maximum visibility.",
    icon: "https://lottie.host/ff7c018c-8c94-4b84-87ef-17383a037d36/tqVGLuFh4N.lottie",
  },
  {
    title: "TECHNICAL SEO AUDITS",
    description:
      "Ensuring your site's technically sound to perform well in search engines.",
    icon: "https://lottie.host/73aa0bea-6f91-442d-927e-0813231ca2cd/F5APCMf7Ud.lottie",
  },
  {
    title: "OFF-PAGE SEO OPTIMIZATION",
    description:
      "Enhancing your site's relevance through strategic link building and brand mentions.",
    icon: "https://lottie.host/4a26b5c7-37f4-4c1d-b5f3-c272c6cd2ab4/xJuGh4IXQZ.lottie",
  },
];

export default function StrategicSEOSection() {
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
              opacity: Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-gray-300 animate-gradient text-center">
            STRATEGIC SEO <br />
            <span className="inline-block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 animate-gradient-fast">
              DRIVE ORGANIC GROWTH
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed font-light text-center">
            At Christy Digital, we understand that no two businesses are the
            same. That's why we offer a full suite of services, each tailored to
            address your unique challenges and goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          {seoServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative">
                <DotLottieReact
                  src={service.icon}
                  loop
                  autoplay
                  speed={1}
                  style={{ width: "100%", height: "120px" }}
                />
                <h4 className="font-bold text-lg mt-4 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
                  {service.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
}
