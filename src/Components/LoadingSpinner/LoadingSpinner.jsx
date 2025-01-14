import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="w-full min-h-[400px] flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    </div>
  );
};

export default LoadingSpinner;
