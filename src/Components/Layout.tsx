// Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black">
      {/* Main content */}
      <Header />
      <div className="z-10 pt-12">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
