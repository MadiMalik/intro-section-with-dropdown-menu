import './App.css';
import Menu from './components/Menu';
import openMenu from './images/icon-menu.svg';
import closeMenu from './images/icon-close-menu.svg';
import clientImg1 from './images/client-databiz.svg';
import clientImg2 from './images/client-audiophile.svg';
import clientImg3 from './images/client-meet.svg';
import clientImg4 from './images/client-maker.svg';
import mobile from './images/image-hero-mobile.png';
import desktop from './images/image-hero-desktop.png';



function App() {
  const handleOpenMenu = () => {
    const overlay = document.querySelector(".overlay")
    overlay.classList.toggle("show")
  }

  return (
    <>
      <div className="wrapper">
        <Menu/>
        
        <main className='flex flex-col-reverse py-10 lg:py-8 md:grid md:gap-[10rem] md:grid-cols-2 md:place-items-center mx-4xl md:px-[8rem] lg:px-[10rem] mx-auto'>
        
          <section className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
            <h1 className='font-bold text-5xl lg:text-8xl mb-5'>
              Make <br className='hidden lg:block'/> remote work
            </h1>
            <p className="mb-7 lg:mt-12">
              Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
            </p>

            <a className='bg-black-500 rounded-lg shadow text-gray-200 font-bold hover:opacity-75 transition-all duration-150 pt-3 pb-3 px-8 mt-4 cursor-pointer lg:mt-12'
             href="#">Learn more</a>

            <ul className='grid grid-cols-4 gap-1 place-items-center mt-12 lg:mt-10 md:place-items-start lg:pt-12'>
              <li><img src={clientImg1} className='w-16 md:w-24' alt="" /></li>
              <li><img src={clientImg2} className='w-16 md:w-24' alt="" /></li>
              <li><img src={clientImg3} className='w-16 md:w-24' alt="" /></li>
              <li><img src={clientImg4} className='w-16 md:w-24' alt="" /></li>
            </ul>
          </section>

          <section>
            <picture>
              <source media="(min-width: 768px)" srcSet={desktop} />
              <img src={mobile} alt="" className="w-full lg:h-min" />
            </picture>
          </section>
        </main>
      </div>

      <div className="overlay" onClick={handleOpenMenu}></div>
    </>
  )
}

export default App
