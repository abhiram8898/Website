import React, { useRef } from "react";
import HeroSection from "../HeroSection/Herosection";
import StrategicSEOSection from "../Services/Service";
import ContentStrategySection from "../Contenst/Contents";
import FinalCTASection from "../FTC/Ftc";

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const finalCTARef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-full bg-black rounded-2xl border-8 border-gray-800 shadow-2xl relative overflow-y-auto">
        {/* TV Frame */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-20 pointer-events-none"></div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-full">
          <div ref={heroRef}>
            <HeroSection />
          </div>

          <div ref={servicesRef}>
            <StrategicSEOSection />
          </div>

          <div ref={contentRef}>
            <ContentStrategySection />
          </div>
          <div ref={finalCTARef}>
            <FinalCTASection />
          </div>
        </div>

        {/* TV Controls */}
        <div className="fixed bottom-4 right-4 flex space-x-2 z-10">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
