import { BrowserRouter } from 'react-router-dom';

import { Hero, Navbar } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex min-h-screen w-screen flex-col bg-[#F2F2F2]">
        <div className='container mt-24 mx-auto px-12 py-4'>
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
