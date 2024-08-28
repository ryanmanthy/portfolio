import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">Ryan Manthy</div>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">Health + Bio</a>
          <a href="#projects" className="hover:text-gray-400">Civics</a>
          <a href="#contact" className="hover:text-gray-400">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
