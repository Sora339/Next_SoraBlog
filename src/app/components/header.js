"use client";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="relative bg-slate-800 h-20 w-full p-4 flex items-center justify-between">
      <h1 className="text-white font-nsjp text-3xl sm:text-5xl font-bold">
        SoraBlog
      </h1>
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:flex sm:items-center w-full sm:w-auto mr-8`}
      >
        <button
          id="worksscrollButton"
          className="block mt-2 sm:mt-0 sm:ml-12"
          onClick={(e) => handleMenuClick(e, "works")}
        >
          <h2 className="text-xl sm:text-3xl font-nsjp font-semibold text-white">
            Works
          </h2>
        </button>
        <button
          id="contactscrollButton"
          className="block mt-2 sm:mt-0 sm:ml-12"
          onClick={(e) => handleMenuClick(e, "contact")}
        >
          <h2 className="text-xl sm:text-3xl font-nsjp font-semibold text-white">
            Contact
          </h2>
        </button>
        <button
          id="blogscrollButton"
          className="block mt-2 sm:mt-0 sm:ml-12"
          onClick={(e) => handleMenuClick(e, "blog")}
        >
          <h2 className="text-xl sm:text-3xl font-nsjp font-semibold text-white">
            Blog
          </h2>
        </button>
      </nav>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-slate-800 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          <button
            id="worksscrollButton"
            className="text-2xl font-nsjp font-semibold text-white"
            onClick={(e) => handleMenuClick(e, "works")}
          >
            Works
          </button>
          <button
            id="contactscrollButton"
            className="text-2xl font-nsjp font-semibold text-white"
            onClick={(e) => handleMenuClick(e, "contact")}
          >
            Contact
          </button>
          <button
            id="blogscrollButton"
            className="text-2xl font-nsjp font-semibold text-white"
            onClick={(e) => handleMenuClick(e, "blog")}
          >
            Blog
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;