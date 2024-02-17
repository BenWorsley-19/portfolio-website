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
    <nav 
      className="m:px-16 px-6 w-full flex items-center py-4 fixed bg-[#F2F2F2] border-b border-[#ffffff] top-0 z-20"
    >
      <div className='container flex justify-between items-center mx-auto'>
        <Link
          to="/"
          className=''
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-[#121212] text-[18px] font-bold cursor-pointer">BW</p>
        </Link> 
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? 'text-[#b0afaf]' : 'text-[#121212]'} hover:text-[#b0afaf] text-[18px] cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)} 
          />
          
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-br from-[#cfe8d9] to-[#A9D8F7] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {
                navLinks.map((link) => (
                  <li
                  key={link.id}
                  className={`${active === link.title ? 'text-[#b0afaf]' : 'text-[#121212]'} font-poppins cursor-pointer text-[16px]`}
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