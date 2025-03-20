const seoServices = [
  {
    title: "KEYWORD RESEARCH & STRATEGY",
    description: "Identifying the most valuable keywords for your business.",
  },
  {
    title: "ON-PAGE OPTIMIZATION",
    description:
      "Improving your site’s content and structure for maximum visibility.",
  },
  {
    title: "TECHNICAL SEO AUDITS",
    description:
      "Ensuring your site is technically sound to perform well in search engines.",
  },
  {
    title: "OFF-PAGE SEO OPTIMIZATION",
    description:
      "Enhancing your site’s relevance through strategic link building and brand mentions.",
  },
];

export default function StrategicSEOSection() {
  return (
    <section className=" h-screenbg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">
          Tailored strategies, guaranteed results
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          STRATEGIC SEO:
          <br />
          DRIVE ORGANIC GROWTH
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
          At Lumen Digital, we understand that no two businesses are the same.
          That’s why we offer a full suite of services, each tailored to address
          your unique challenges and goals. Our team of experts combines
          creativity with data to build strategies that deliver results.
        </p>
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {seoServices.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-xl shadow-lg hover:shadow-xl transition hover:scale-105 hover:bg-amber-100"
            >
              <h4 className="font-bold text-sm mb-2 text-orange-600">
                {service.title}
              </h4>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        <p className="text-md md:text-lg text-white">
          Let’s make your business easier to find and bring the right visitors
          to your site.
        </p>
      </div>
    </section>
  );
}
