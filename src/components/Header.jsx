import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => (
  <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
<nav className="bg-blue-600 text-white fixed w-full z-50 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO / ชื่อ */}
        <div className="text-2xl font-bold tracking-wide">
          Rittichok
        </div>

        {/* เมนูด้านขวา */}
        <ul className="flex space-x-6 text-lg">
          {[
            { label: 'Home', id: 'home' },
            { label: 'About', id: 'about' },
            { label: 'Education', id: 'education' },
            { label: 'Work', id: 'work' },
            { label: 'Projects', id: 'projects' },
            { label: 'Skills', id: 'skills' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:underline hover:text-gray-200 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
);
export default Header;
