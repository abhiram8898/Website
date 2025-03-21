import React, { useRef, lazy, Suspense } from "react";

// Lazy load components
const StrategicSEOSection = lazy(() => import("../Services/Service"));
const ContentStrategySection = lazy(() => import("../About/About"));

const Home: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-y-auto h-full w-full ">
      <Suspense>
        <div ref={servicesRef}>
          <StrategicSEOSection />
        </div>

        <div ref={contentRef}>
          <ContentStrategySection />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
