export default function FinalCTASection() {
  return (
    <section className="relative bg-black text-white overflow-hidden h-screen flex items-center justify-center">
      {/* Animated background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black animate-pulse" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl px-4 md:px-12">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 animate-gradient">
          READY TO <br />
          <span className="inline-block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
            ILLUMINATE YOUR PATH?
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-8 max-w-2xl leading-relaxed">
          Let's bring clarity to your digital strategy and drive meaningful
          results. Reach out to us today and discover how Christy digital
          strategies can effectively illuminate your path to lasting success.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-base font-semibold rounded-full shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1">
            Get Started
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white text-base font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </section>
  );
}
