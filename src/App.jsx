import { useState } from 'react';
import './App.css';
import mainLogo from './images/logo.svg';
import menu from './images/icon-menu.svg';
import clientImg1 from './images/client-databiz.svg';
import clientImg2 from './images/client-audiophile.svg';
import clientImg3 from './images/client-meet.svg';
import clientImg4 from './images/client-maker.svg';
import heroImgMobile from './images/image-hero-mobile.png';
import heroImgDesktop from './images/image-hero-desktop.png';

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

        <main>
          <div className="img-box">
            <img className='w-full h- object-cover lg:hidden' src={heroImgMobile} alt="Hero Image Mobile" />

            <img className='w-full sm:hidden lg:inline-block' src={heroImgDesktop} alt="Hero Image desktop" />
          </div>
          <div className="content">
            <h1 className='font-bold'>
              Make remote work
            </h1>
            <p>
              Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
            </p>

            <a href="#">Learn more</a>

            <ul className='flex justify-between items-center'>
              <li><img src={clientImg1} alt="" /></li>
              <li><img src={clientImg2} alt="" /></li>
              <li><img src={clientImg3} alt="" /></li>
              <li><img src={clientImg4} alt="" /></li>
            </ul>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
