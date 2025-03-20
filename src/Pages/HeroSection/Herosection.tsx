import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden h-screen flex items-center justify-center">
      {/* Background swirl image (abstract shape) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/swirl-bg.png" // Add your abstract swirl image in the public folder
          alt="Abstract swirl"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 md:px-12 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          ILLUMINATE YOUR <br />
          <span className="inline-block mt-2">MARKETING FUTURE</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-xl mx-auto">
          Achieve sustainable growth and gain a deeper sense of clarity through
          meticulously aligned digital strategies specifically designed to drive
          impactful and measurable results for your business.
        </p>
        <button className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full shadow-lg transition">
          Start your audit
        </button>
      </div>

      {/* Top-right Nav (Optional) */}
      <div className="absolute top-8 right-10 z-10 space-x-6 hidden md:block">
        {["About", "Services", "Case Studies", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
            className="text-sm text-gray-300 hover:text-white transition"
          >
            {item}
          </a>
        ))}
      </div>
    </section>
  );
}
