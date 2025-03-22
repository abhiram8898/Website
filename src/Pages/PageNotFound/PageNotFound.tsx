import { FC } from "react";
import { Link } from "react-router-dom";

const PageNotFound: FC = () => {
  return (
    <div className="min-h-screen  w-screen  flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-violet-400 text-white rounded-lg hover:bg-violet-700 transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
