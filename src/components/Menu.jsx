// import React from 'react'
import { useState } from 'react';
import openMenu from '../images/icon-menu.svg';
import closeMenu from '../images/icon-close-menu.svg';

import logo from '../images/logo.svg';
import arrowDown from '../images/icon-arrow-down.svg';
import todoList from '../images/icon-todo.svg'
import calender from '../images/icon-calendar.svg'
import reminder from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'

import arrowUp from '../images/icon-arrow-up.svg';

// rfce
function Menu() {
    const [openFeatures, setOpenFeatures] = useState(false)
    const [openCompany, setOpenCompany] = useState(false)

    const handleOpenMenu = () => {
      const navbar = document.querySelector(".navbar")
      const overlay = document.querySelector(".overlay")
      const menuButton = document.querySelector('.menu-button');
      navbar.classList.toggle('open')
      overlay.classList.toggle("show")
  
      if(navbar.classList.contains("open")){
        menuButton.src = closeMenu
      }else{
        menuButton.src = openMenu
      }
    }
  
    return (
      <>
          <header className='w-full flex justify-between items-center pt-10 lg:pt-8 pb-6 px-8'>
            <div className='lg:flex lg:items-start lg:justify-start lg:gap-8'>
              <img className='lg:mr-12' src={logo} alt="Logo " />
  
              <nav className='navbar lg:gap-8'>
                <div >
                  <button onClick={ () => setOpenFeatures(!openFeatures)} className='flex items-center justify-start hover:text-gray-300'>

                    Features {openFeatures ? <img src={arrowUp} alt="Arrow down" className='ml-4'/> : <img src={arrowDown} alt="Arrow down" className='ml-4 hover:text-gray-300'/>}
                  </button>
                  {openFeatures && 
                    <ul className='mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow'>
                    <li className='flex items-center justify-start text-sm mb-2 cursor-pointer hover:text-gray-300'><img className='mr-2' src={todoList} alt="" />Todo List</li>
                    <li className='flex items-center justify-start text-sm mb-2 cursor-pointer hover:text-gray-300'><img className='mr-2' src={calender} alt="" />Calender</li>
                    <li className='flex items-center justify-start text-sm mb-2 cursor-pointer hover:text-gray-300'><img className='mr-2' src={reminder} alt="" />Reminders</li>
                    <li className='flex items-center justify-start text-sm mb-2 cursor-pointer hover:text-gray-300'><img className='mr-2' src={planning} alt="" />Planning</li>
                  </ul>
                  }
                </div>
  
                <div className='mt-4 lg:mt-0'>
                  <a onClick={() =>setOpenCompany(!openCompany)} className='flex items-center justify-start hover:text-gray-300 cursor-pointer'>
                    Company {openCompany ?  <img src={arrowUp} alt="Arrow Up" className='ml-4' /> :  <img src={arrowDown} alt="Arrow down" className='ml-4' />}
                  </a>
  
                  {openCompany && <ul className='mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow cursor-pointer'>
                    <li className='flex items-center justify-start text-sm mb-2 cursor-pointer hover:text-gray-300'>History</li>
                    <li className='flex items-center justify-start text-sm mb-2 cursor-pointer hover:text-gray-300'>Our Team</li>
                    <li className='flex items-center justify-start text-sm mb-2 cursor-pointer hover:text-gray-300'>Blog</li>
                  </ul>}
                </div>
  
                <div className='mb-2 lg:mb-0 mt-6 lg:mt-0 hover:text-gray-300 cursor-pointer'>
                  <a>Careers</a>
                </div>
  
                <div className='mt-4 lg:mt-0 hover:text-gray-300 cursor-pointer'>
                  <a>About</a>
                </div>

                <div className='grid mt-16 lg:hidden text-center'>
                  <a className='opacity-75 hover:text-black-500 cursor-pointer'>Login</a>
                  <a className='border-2 border-gray-300 opacity-75 py-2 rounded-3xl mt-6 hover:bg-black-500 transition-all cursor-pointer'>Register</a>
                </div>
              </nav>
            </div>
  
            <div className='lg:hidden'>
              <a>
                <img className='menu-button cursor-pointer' onClick={handleOpenMenu} src={openMenu} alt="menu icon" />
              </a>
            </div>
  
            <div className='hidden lg:block'>
              <a className='mr-10 opacity-75 hover:text-gray-300 cursor-pointer'>Login</a>
              <a className='border-2 border-black-500 px-6 py-2 rounded-3xl hover:bg-black-500 hover:text-gray-200 cursor-pointer'>Register</a>
            </div>
          </header>

          <div className="overlay" onClick={handleOpenMenu}></div>
    </>
  )
}

export default Menu
