import { useState } from 'react';
import './App.css';
import mainLogo from './images/logo.svg';
import menu from './images/icon-menu.svg';
import clientImg1 from './images/client-databiz.svg';
import clientImg2 from './images/client-audiophile.svg';
import clientImg3 from './images/client-meet.svg';
import clientImg4 from './images/client-maker.svg';
import mobile from './images/image-hero-mobile.png';
import desktop from './images/image-hero-desktop.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper w-full bg-white ">
        <header className='w-full flex justify-between items-center pt-6 pb-6 px-8  lg:justify-start'>
          <img className='me-34 w-[7rem]' src={mainLogo} alt="Logo" />

          <nav className='w-full justify-between items-center hidden lg:flex'>
            <ul className='flex justify-between items-center gap-x-8'>
              <li>Features</li>
              <li>Company</li>
              <li>Careers</li>
              <li>About</li>
            </ul>

            <div>
              <a href="#">Login</a>
              <a href="#">Ragister</a>
            </div>
          </nav>

          <img className='lg:hidden ' src={menu} alt="Menu icon" />
        </header>

        <main className='flex flex-col-reverse py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto'>
        
          <section className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
            <h1 className='font-bold text-5xl lg:text-8xl mb-5'>
              Make remote work
            </h1>
            <p className="mb-7">
              Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
            </p>

            <a className='bg-black-500 rounded-lg shadow text-gray-200 font-bold hover:opacity-75 transition-all duration-150 pt-3 pb-3 px-8 cursor-pointer'
             href="#">Learn more</a>

            <ul className='grid grid-cols-4 gap-1 place-items-center mt-10 md:place-items-start'>
              <li><img src={clientImg1} className='w-16 md:w-24' alt="" /></li>
              <li><img src={clientImg2} className='w-16 md:w-24' alt="" /></li>
              <li><img src={clientImg3} className='w-16 md:w-24' alt="" /></li>
              <li><img src={clientImg4} className='w-16 md:w-24' alt="" /></li>
            </ul>
          </section>

          <section>
            <picture>
              <source media="(min-width: 768px)" srcSet={desktop} />
              <img src={mobile} alt="" className="w-full" />
            </picture>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
