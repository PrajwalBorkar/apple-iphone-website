import React from "react";
import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
        {/* Animated spinner */}
        <div className="w-12 h-12 border-4 border-gray-300 rounded-full border-t-gray-800 animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
