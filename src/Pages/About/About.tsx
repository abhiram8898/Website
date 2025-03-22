import { motion } from "framer-motion";
import consulting from "../../../public/Marketing consulting-cuate-min.png";

export default function About() {
  return (
    <section className="min-h-screen w-full bg-black text-white overflow-hidden flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
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
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black animate-pulse" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" />
        </div>

        {/* Text content */}
        <div className="relative z-10 w-full lg:w-1/2 space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 animate-gradient">
            ABOUT <br className="hidden sm:block" />
            <span className="inline-block mt-2 sm:mt-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400">
              Christy Digital Strategies
            </span>
          </h1>
          <div className="space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              At Christy Digital Strategies, we are a premier digital marketing
              agency dedicated to transforming businesses through innovative
              digital solutions. With over a decade of experience, we've
              successfully helped companies across various industries establish
              strong online presences and achieve remarkable growth.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Our client portfolio includes Fortune 500 companies, emerging
              startups, and established mid-sized businesses. We've partnered
              with industry leaders in technology, healthcare, retail, and
              finance, delivering tailored strategies that drive measurable
              results.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              From global enterprises like Microsoft and Adobe to innovative
              startups revolutionizing their industries, we pride ourselves on
              building long-term partnerships that foster digital excellence and
              sustainable growth.
            </p>
          </div>
        </div>

        {/* Image content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-full lg:w-1/2 mt-8 lg:mt-0"
        >
          <div className="relative max-w-2xl mx-auto lg:max-w-none">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 rounded-3xl blur-xl opacity-25" />
            <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
              <img
                src={consulting}
                alt="Marketing consulting illustration"
                className="w-full h-auto object-contain max-h-[400px] sm:max-h-[500px] lg:max-h-[600px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
