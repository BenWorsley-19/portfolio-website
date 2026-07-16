import { BrowserRouter } from 'react-router-dom';

import { Hero, Navbar, Projects, TechAssessAI, EvalynAI } from './components';

const App = () => {
  return (
    <BrowserRouter>
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

        <footer className="relative z-10 border-t border-white/5 mt-24">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row lg:px-10">
            <p className="font-mono text-xs tracking-widest text-neutral-500">
              © {new Date().getFullYear()} BEN WORSLEY
            </p>
            <p className="text-sm text-neutral-500">
              Built with React, Vite &amp; Tailwind
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
