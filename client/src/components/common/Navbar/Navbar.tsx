'use client'
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';

import { useRouter } from "next/navigation";
type HideHeaderProps = {
  headerShow: boolean;
};

const Navbar = ({ headerShow }: HideHeaderProps) => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      // Replace 'yourDivId' with the actual id of your HTML div
      const targetDiv = document.getElementById('mainInput');

      if (targetDiv) {
        const { top } = targetDiv.getBoundingClientRect();

        // Adjust the value (30 in this case) based on your requirement
        if (top > 60) {
          setScrolling(false);
        } else {
          setScrolling(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once


  return (
    <>
      <div className={`w-full ${headerShow && 'fixed top-0 left-0'}  z-10`}>

        {headerShow &&
         <header className={`flex   items-center gap-1 justify-center bg-[#222222] text-white py-2 transition-all duration-500  w-full text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] ${!scrolling ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <span className="text-[#D0BCFF]">"20% OFF</span>
          <span> when you book VISA for</span>
          <span className="text-[#D0BCFF]">2+ travelers!</span>
          <span>Save big on your journey now." </span>
        </header>
        }
       

        <nav className={`flex items-center justify-between shadow-navshadow px-4 sm:px-8 w-full py-3 sm:py-4 transition-all duration-500 ${scrolling && 'bg-white'} ${!headerShow && 'bg-visaBlue'}`}>
          <button onClick={()=>router.push('/')} className="bg-regal-purple py-[0.625rem] px-[1.125rem] text-white rounded-[2rem] text-[0.75rem] md:text-[1rem]">Aerviz</button>


          <div className={`flex items-center relative w-[30%] min-w-[12rem] rounded-[0.75rem] overflow-hidden border-solid border-[1px] border-visaBlue  ${scrolling ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <svg className="absolute  left-4 cursor-pointer" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_987_3378)">
                <path d="M17.5808 15.9434C18.8002 14.3748 19.5263 12.4037 19.5263 10.2631C19.5263 5.14724 15.379 1 10.2632 1C5.14725 1 1 5.14724 1 10.2631C1 15.379 5.14725 19.5262 10.2632 19.5262C12.4037 19.5262 14.3748 18.8002 15.9433 17.5809L21.0234 22.6609C21.4755 23.113 22.2087 23.113 22.6609 22.6609C23.113 22.2087 23.113 21.4755 22.6609 21.0234L17.5808 15.9434Z" stroke="black" strokeWidth="2" strokeLinecap="square" />
              </g>
              <defs>
                <clipPath id="clip0_987_3378">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <input
              className="text-[0.75rem] sm:text-[0.875rem] md:text-[1.25rem] w-full outline-none   py-2 pl-[3.5rem] pr-[1rem]  placeholder:text-black placeholder:text-[0.875rem] md:placeholder:text-[1.25rem] "
              placeholder="Where to?"
            />
          </div>


          <button onClick={()=>router.push('/sign-in')} className="bg-[#222222] py-[0.625rem] px-[1.125rem] rounded-md text-white text-[0.75rem] md:text-[1rem]">Login</button>
        </nav>
      </div>


      {headerShow &&
        <header className={`flex z-10  items-center gap-1 justify-center bg-[#222222] text-white py-2 transition-all duration-500 fixed top-[62px] md:top-[78px] left-0 w-full text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] ${scrolling ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-[#D0BCFF]">"20% OFF</span>
          <span> when you book VISA for</span>
          <span className="text-[#D0BCFF]">2+ travelers!</span>
          <span>Save big on your journey now." </span>
        </header>
      }

    </>
  );
};

export default Navbar;
