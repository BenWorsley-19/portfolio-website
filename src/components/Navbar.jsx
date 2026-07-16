import { useState } from 'react';
import { Link } from 'react-router-dom';

import { menu, close } from '../assets';

const navLinks = [
  { id: "techassessai", title: "Featured" },
  { id: "projects", title: "Projects" },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed top-0 z-30 w-full border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-display text-sm font-bold tracking-tight text-neutral-100 transition-colors group-hover:border-accent/50">
            BW
          </span>
          <span className="hidden font-mono text-xs tracking-widest text-neutral-400 sm:inline">
            ben&nbsp;worsley
          </span>
        </Link>

        <ul className="hidden list-none flex-row items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-neutral-50' : 'text-neutral-400'} text-sm font-medium transition-colors duration-300 hover:text-neutral-50`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className="font-mono text-xs tracking-widest uppercase">
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>
              <span className="font-mono text-[0.65rem] tracking-widest uppercase text-neutral-300">
                Available
              </span>
            </span>
          </li>
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <button
            className="rounded-lg border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="h-5 w-5 object-contain invert"
            />
          </button>

          <div
            className={`${!toggle ? 'hidden' : 'flex'} absolute right-4 top-20 z-20 min-w-[200px] flex-col rounded-2xl border border-white/10 bg-ink-850/95 p-6 backdrop-blur-xl`}
          >
            <ul className="flex list-none flex-col items-start gap-5">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="font-mono text-xs uppercase tracking-widest text-neutral-300 transition-colors hover:text-neutral-50"
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
