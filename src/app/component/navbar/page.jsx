"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className={`flex justify-between items-center h-16 bg-white ${
        isSidebarOpen ? "w-75 md:w-3/4" : "w-full"
      }`}
    >
      <div className="flex-1">
        <div className="relative w-full max-w-xl mx-auto">
          <input
            type="text "
            className="w-full border-2 border-gray-200 rounded-full pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue"
            placeholder="input Search text "
          />
          <div className="absolute top-0 left-0 mt-2 ml-2"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
