import React from 'react';
import { menu } from '../assets/data';

const Navbar = () => {
  return (
    <div className="bg-white bg-opacity-20 font-semibold text-white px-4 py-4 fixed flex justify-center gap-12 w-screen z-10">
      {menu.map((item, index) => (
        <a
          key={index}
          href={`#${item.id}`} // Link to the section id
          className="px-4 py-1 border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition duration-300"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
