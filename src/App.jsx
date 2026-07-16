import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';

import { Hero, Navbar, Projects, TechAssessAI, EvalynAI } from './components';

const socials = [
  { label: "GitHub", href: "https://github.com/BenWorsley-19" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/benworsley/" },
];

const App = () => {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen w-full overflow-x-hidden bg-ambient text-neutral-100">
          {/* Faint grid overlay */}
          <div className="pointer-events-none fixed inset-0 bg-grid" aria-hidden="true" />

          <Navbar />

          <main className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
            <Hero />
            <TechAssessAI />
            <EvalynAI />
            <Projects />
          </main>

          <footer className="relative z-10 mt-24 border-t border-white/5">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row lg:px-10">
              <p className="font-mono text-xs tracking-widest text-neutral-400">
                © {new Date().getFullYear()} BEN WORSLEY
              </p>
              <div className="flex items-center gap-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-neutral-400 transition-colors duration-300 hover:text-neutral-50"
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
};

export default App;
