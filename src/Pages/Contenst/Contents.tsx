import React from "react";

export default function ContentStrategySection() {
  return (
    <section className="bg-black py-20 px-6 flex justify-center items-center h-screen">
      <div className="bg-white rounded-3xl p-10 md:p-16 max-w-6xl w-full flex flex-col md:flex-row items-start gap-10">
        {/* Left - Icon & Highlighted Message */}
        <div className="flex-1">
          {/* Icon */}
          <div className="mb-6">
            <img
              src="/quote-icon.svg" // Add your SVG icon here
              alt="Quote Icon"
              className="w-10 h-10"
            />
          </div>
          {/* Highlighted Text */}
          <p className="text-lg leading-relaxed text-gray-800">
            <span className="text-orange-500 font-medium">
              Our content strategy services help you build meaningful
              connections
            </span>{" "}
            with your audience through high-quality, tailored content.
          </p>
        </div>

        {/* Right - Heading & Paragraph */}
        <div className="flex-1 text-right">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight text-black">
            Content That Converts: Engage <br />
            and Influence Your Audience
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            We create content that speaks to their needs and interests. By
            understanding your audience’s unique preferences, we craft messages
            that resonate, engage, and inspire action.
          </p>
        </div>
      </div>
    </section>
  );
}
