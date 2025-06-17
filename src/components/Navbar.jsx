import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { menu, close } from '../assets';

const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "experience",
      title: "Experience",
    }
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-4 fixed backdrop-blur-md bg-white/70 border-b border-white/20 shadow-lg top-0 z-20">
      <div className='container flex justify-between items-center mx-auto'>
        <Link
          to="/"
          className='group'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-[#121212] text-[18px] font-bold cursor-pointer">BW</p>
        </Link> 
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {
            navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? 'text-sky-500' : 'text-gray-700'} hover:text-sky-500 text-lg font-medium cursor-pointer transition-all duration-300 relative group`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`} className="relative z-10">{link.title}</a>
                                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </li>
            ))
          }
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div 
            className="p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 cursor-pointer hover:bg-white/30 transition-all duration-300"
            onClick={() => setToggle(!toggle)}
          >
            <img 
              src={toggle ? close : menu} 
              alt="menu" 
              className='w-6 h-6 object-contain'
            />
          </div>
          
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 backdrop-blur-md bg-white/80 border border-white/30 shadow-xl absolute top-20 right-4 min-w-[180px] z-10 rounded-2xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {
                navLinks.map((link) => (
                  <li
                  key={link.id}
                  className={`${active === link.title ? 'text-sky-500' : 'text-gray-700'} font-medium cursor-pointer text-lg hover:text-sky-500 transition-colors duration-300`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>  
  );
};

export default Navbar;