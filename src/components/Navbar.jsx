import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { logo, menu, close } from '../assets';

const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    }
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`m:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-transparent" : "bg-[#cfe8d9]"}`}
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
          <p className="text-[#4383ae] text-[18px] font-bold cursor-pointer">BW</p>
        </Link> 
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? 'text-[#44c2ee]' : 'text-[#4383ae]'} hover:text-black text-[18px] font-medium cursor-pointer`}
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
          
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {
                navLinks.map((link) => (
                  <li
                  key={link.id}
                  className={`${active === link.title ? 'text-[#44c2ee]' : 'text-[#4383ae]'} font-poppins font-medium cursor-pointer text-[16px]`}
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