import React, { useRef, lazy, Suspense } from "react";

// Lazy load components
const StrategicSEOSection = lazy(() => import("../Services/Service"));

const Home: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-y-auto h-full w-full ">
      <Suspense>
        <div ref={servicesRef}>
          <StrategicSEOSection />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
