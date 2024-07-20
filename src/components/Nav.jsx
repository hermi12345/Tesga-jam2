import React from 'react';
import logo from './img/log.png'; // Adjust the import path based on your project structure
import backgroundImage from './img/jam1.jpg';
import logo2 from './img/jam2.jpg'

import './Nav.css';
const Nav = () => {
  return (
  
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="[&>*:last-child]:hover:top-0 md:[&>*:last-child]:hover:left-[15rem] lg:[&>*:last-child]:hover:left-[18rem] md:[&>*:last-child]:hover:left-[13rem] xs:[&>*:last-child]:hover:left-[7rem] group absolute top-[30%] md:left-[30%] sm:left-[25%] xs:left-[15%]">
        <div className="[transition:all_400ms_ease] group-hover:rotate-0 lg:w-[18rem] lg:h-[22rem] md:w-[14rem] md:h-[18rem] sm:w-[12rem] sm:h-[16rem] xs:w-[10rem] xs:h-[12rem] border-[0.4rem] border-transparent shadow-xl absolute -rotate-[10deg] origin-bottom-left">
          <img src={logo2} className="w-full h-full rounded-sm" alt="Frame Two" />
        </div>
        <div className="[transition:all_400ms_ease] absolute -rotate-[10deg] last:rotate-[20deg] -top-[2rem] left-[2rem] group-hover:rotate-0 lg:w-[18rem] lg:h-[22rem] md:w-[14rem] md:h-[18rem] sm:w-[12rem] sm:h-[16rem] xs:w-[10rem] xs:h-[12rem] border-[0.4rem] border-transparent shadow-xl origin-bottom-left">
          <img src={logo} className="w-full h-full rounded-sm" alt="Frame One" />
        </div>
      </div>
      <div className="absolute py-4 top-[80%] md:top-[75%] sm:top-[70%] xs:top-[65%] left-[10%] right-[10%]">
        <div className="bg-white bg-opacity-90 shadow-lg rounded-lg px-6 py-4 text-center">
          {/* Apply font-pacifico only to this specific h1 */}
          <h1 className="text-4xl md:text-5xl xs:text-3xl text-gray-900 font-semibold leading-tight font-tangerine">
          Tesga Jam: From Orchard to Table, Delight in Every Spoonful.
        </h1>
        </div>
      </div>
      {/* Nav */}
      <header className="bg-transparent text-black w-full mx-auto rounded-xl border-b-4 border-black/20 px-4 flex items-center py-4 shadow-lg">
        <div className="flex-1 flex justify-between items-center">
          <h2 className="py-2 px-4 bg-green-300 border-2 border-dashed rounded-full text-4xl font-serif font-semibold text-white">TESGA-JAM</h2>
        </div>
        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
          <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full z-10" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
  <li><a className="md:p-4 py-3 px-0 block hover:bg-green-300 hover:text-white font-bold" href="/">Home</a></li>
  <li><a className="md:p-4 py-3 px-0 block hover:bg-green-300 hover:text-white font-bold" href="#">Products</a></li>
  <li><a className="md:p-4 py-3 px-0 block hover:bg-green-300 hover:text-white font-bold" href="#">Testimonial</a></li>
  <li><a className="md:p-4 py-3 px-0 block hover:bg-green-300 hover:text-white font-bold" href="#">About</a></li>
  <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:bg-green-300 hover:text-white font-bold" href="#">Contact</a></li>
</ul>
          </nav>
        </div>
      </header>
      {/* End of Nav */}
    </div>
  );
}

export default Nav;