'use client'
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='w-full fixed top-0 left-0 z-10'>
        <header className={`flex   items-center gap-1 justify-center bg-[#222222] text-white py-2 transition-all duration-500  w-full  ${!scrolling ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <span className="text-[#D0BCFF]">"20% OFF</span>
          <span> when you book VISA for</span>
          <span className="text-[#D0BCFF]">2+ travelers!</span>
          <span>Save big on your journey now." </span>
        </header>

        <nav className={`flex items-center justify-between shadow-navshadow px-8 w-full  backdrop-blur-sm h-20 transition-all duration-500 ${scrolling && 'bg-white'}`}>
          <button className="bg-regal-purple py-[0.625rem] px-[1.125rem] text-white rounded-[2rem]">Aerviz</button>
          <button className="bg-[#222222] py-[0.625rem] px-[1.125rem] rounded-md text-white">Login</button>
        </nav>
      </div>


      <header className={`flex z-10  items-center gap-1 justify-center bg-[#222222] text-white py-2 transition-all duration-500 fixed top-20 left-0 w-full  ${scrolling ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-[#D0BCFF]">"20% OFF</span>
        <span> when you book VISA for</span>
        <span className="text-[#D0BCFF]">2+ travelers!</span>
        <span>Save big on your journey now." </span>
      </header>
    </>
  );
};

export default Navbar;
