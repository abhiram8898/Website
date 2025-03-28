// Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black  no-scrollbar">
      {/* Main content */}
      <Header />
      <div className="z-10 pt-6 md:pt-4 overflow-hidden">
        <main className="overflow-hidden">
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
