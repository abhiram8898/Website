import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../../Components/Layout";
import LoadingSpinner from "../../Components/loadingSpinnner/Spinner";

// Lazy load components
const Home = lazy(() => import("../Home/Home"));
const About = lazy(() => import("../About/About"));
const ContactUs = lazy(() => import("../ContactUs/ContactUs"));
const SEOServices = lazy(() => import("../Services/Components/Seo"));
const PageNotFound = lazy(() => import("../PageNotFound/PageNotFound"));

const RoutesComponent = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/seoService" element={<SEOServices />} />
          </Route>

          {/* 404 route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutesComponent;
