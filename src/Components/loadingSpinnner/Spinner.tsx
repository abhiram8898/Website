import { FC } from 'react';

const LoadingSpinner: FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-violet-400 rounded-full animate-spin border-t-transparent" />
        
        {/* Inner ring */}
        <div className="absolute top-1 left-1 w-14 h-14 border-4 border-indigo-400 rounded-full animate-spin border-t-transparent" />
        
        {/* Center ring */}
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-emerald-400 rounded-full animate-spin border-t-transparent" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
