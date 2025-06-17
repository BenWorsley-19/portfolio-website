import { BrowserRouter } from 'react-router-dom';

import { Hero, Navbar, Projects, TechAssessAI } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative min-h-screen w-screen flex flex-col bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-gradient-to-r from-sky-300 to-cyan-300 opacity-20 blur-3xl"></div>
          <div className="absolute -right-4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-300 to-sky-300 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-300 to-sky-300 opacity-20 blur-3xl"></div>
        </div>
        
        <Navbar />
        <div className='relative z-10 container mt-20 mx-auto py-6 px-6 lg:px-12 space-y-16 lg:space-y-20'>
          <Hero />
          <TechAssessAI />
          <Projects />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
