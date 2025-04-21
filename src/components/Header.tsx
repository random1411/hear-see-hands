
import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="w-full py-6 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center">
            <span className="mr-2">👋</span> 
            Sign Language Translator
          </h1>
          <p className="mt-2 opacity-80">Bridging communication through text, voice, and sign language</p>
        </div>
        <nav>
          {location.pathname === "/app" ? (
            <Link
              to="/"
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded text-white font-medium transition"
            >
              Home
            </Link>
          ) : (
            <Link
              to="/app"
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded text-white font-medium transition"
            >
              Launch App
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
