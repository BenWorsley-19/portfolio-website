import { BrowserRouter } from 'react-router-dom';

import { Hero, Navbar, Projects, About, Experience } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="flex min-h-screen w-screen flex-col bg-[#F2F2F2]">
        <Navbar />
        <div className='container mt-24 mx-auto py-4 px-12'>
          <Hero />
          <About />
          <Projects />
          <Experience />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
