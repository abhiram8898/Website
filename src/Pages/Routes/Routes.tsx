// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../../Components/Layout";
import Home from "../Home/Home";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import SEOServices from "../Services/Components/Seo";

function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/seoService" element={<SEOServices />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RoutesComponent;
