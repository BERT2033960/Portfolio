import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-neutral-900 text-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-emerald-500 border-b-neutral-700"></div>
        <span className="text-lg font-medium">Chargement...</span>
      </div>
    </div>
  );
};

export default LoadingPage;
