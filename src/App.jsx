import { useState } from 'react';
import './App.css';
import logo from './images/logo.svg';
import openMenu from './images/icon-menu.svg';
import closeMenu from './images/icon-close-menu.svg';
import clientImg1 from './images/client-databiz.svg';
import clientImg2 from './images/client-audiophile.svg';
import clientImg3 from './images/client-meet.svg';
import clientImg4 from './images/client-maker.svg';
import mobile from './images/image-hero-mobile.png';
import desktop from './images/image-hero-desktop.png';
import arrowDown from './images/icon-arrow-down.svg';
import arrowUp from './images/icon-arrow-up.svg';

import todoList from './images/icon-todo.svg'
import calender from './images/icon-calendar.svg'
import reminder from './images/icon-reminders.svg'
import planning from './images/icon-planning.svg'



function App() {
  const handleOpenMenu = () => {
    const navbar = document.querySelector(".navbar")
    const menuButton = document.querySelector('.menu-button');
    navbar.classList.toggle('open')

    if(navbar.classList.contains("open")){
      menuButton.src = closeMenu
    }else{
      menuButton.src = openMenu
    }
  }

  return (
    <>
      <div className="wrapper w-full bg-white ">
        <header className='w-full flex justify-between items-center pt-6 pb-6 px-8  lg:justify-start'>
          <div>
            <img src={logo} alt="Logo " />

            <nav className='navbar '>
              <div>
                <button className='flex items-center justify-start'>
                  Features <img src={arrowDown} alt="Arrow down" className='ml-2'/>
                </button>

                <ul className='mt-2'>
                  <li className='flex items-center justify-start text-sm mb-2'><img className='mr-2' src={todoList} alt="" />Todo List</li>
                  <li className='flex items-center justify-start text-sm mb-2'><img className='mr-2' src={calender} alt="" />Calender</li>
                  <li className='flex items-center justify-start text-sm mb-2'><img className='mr-2' src={reminder} alt="" />Reminders</li>
                  <li className='flex items-center justify-start text-sm mb-2'><img className='mr-2' src={planning} alt="" />Planning</li>
                </ul>
              </div>

              <div>
                <button className='flex items-center justify-start'>
                  Company <img src={arrowDown} alt="Arrow down" className='ml-2' />
                </button>

                <ul className='mt-2 ml-3'>
                  <li className='flex items-center justify-start text-sm mb-2'>History</li>
                  <li className='flex items-center justify-start text-sm mb-2'>Our Team</li>
                  <li className='flex items-center justify-start text-sm mb-2'>Blog</li>
                </ul>
              </div>

              <div className='mb-2 lg:mb-0'>
                <button>Careers</button>
              </div>

              <div>
                <button>About</button>
              </div>
            </nav>
          </div>

          <div>
            <button>
              <img className='menu-button' onClick={handleOpenMenu} src={openMenu} alt="menu icon" />
            </button>
          </div>

          <div className='hidden lg:block'>
            <button>Login</button>
            <button>Register</button>
          </div>
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
