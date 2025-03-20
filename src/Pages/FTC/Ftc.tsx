export default function FinalCTASection() {
  return (
    <section
      className="relative bg-black text-white px-6 py-24 flex items-center justify-center h-screen"
      style={{
        backgroundImage: "url(/cta-bg.jpg)", // place your background image here
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {/* Left Headline */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight">
            Ready to <br className="hidden md:block" />
            Illuminate Your Path?
          </h2>
        </div>

        {/* Right Text & CTA */}
        <div className="flex-1 text-right">
          <p className="text-sm text-gray-300 mb-2">
            Let’s bring clarity to your digital strategy and drive meaningful
            results.
          </p>
          <p className="text-base text-white mb-6 leading-relaxed">
            Reach out to us today and discover how Lumen digital strategies can
            effectively illuminate your path to lasting success.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
