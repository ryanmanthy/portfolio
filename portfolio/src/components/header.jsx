import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="lg:hidden bg-gray-800 p-4">
        {/* Top menu for screens less than 1100px */}
        <h1 className="text-2xl text-white">Ryan Manthy</h1>
        <ul className="flex justify-between text-white">
          <li className="mx-2"><a href="#portfolio">Portfolio</a></li>
          <li className="mx-2"><a href="#about">Civics</a></li>
          <li className="mx-2"><a href="#services">Science</a></li>
          <li className="mx-2"><a href="#contact">Resume</a></li>
        </ul>
      </nav>

      <div className="hidden lg:block lg:fixed lg:top-0 lg:left-0 lg:h-full lg:w-64 lg:bg-gray-800">
      
        {/* Side menu for screens 1100px or greater */}
        <h1 className="text-2xl text-white">Ryan Manthy</h1>
        <h3 className="text-sm text-white">B.S Computer Science <br />M.S Biomedical Engineering</h3>
        <nav className="flex flex-col items-start p-6 text-white">
          <a href="#home" className="py-2 px-4 w-full hover:bg-gray-700">Portfolio</a>
          <a href="#about" className="py-2 px-4 w-full hover:bg-gray-700">Civics</a>
          <a href="#services" className="py-2 px-4 w-full hover:bg-gray-700">Science</a>
          <a href="#contact" className="py-2 px-4 w-full hover:bg-gray-700">Resume</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;

