import React from "react";
import logo_large from '../assets/logo_large.png'

const Docs: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-100 to-white overflow-hidden px-6">
    <img
      src={logo_large}
      alt="PsycheGenesis Watermark"
      className="absolute opacity-10 w-[600px] h-[600px] object-contain pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
    <div className="max-w-3xl mx-auto p-8 z-10">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Documentation</h1>
      <p className="text-gray-700">
        Here you’ll find detailed information about each module and feature in PsycheGenesis.
        This documentation section is coming soon.
      </p>
    </div>
    </div>
  );
};

export default Docs;
