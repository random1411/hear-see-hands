
import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center">
          <span className="mr-2">👋</span> 
          Sign Language Translator
        </h1>
        <p className="mt-2 opacity-80">Bridging communication through text, voice, and sign language</p>
      </div>
    </header>
  );
};

export default Header;
