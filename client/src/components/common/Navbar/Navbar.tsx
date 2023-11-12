import React from 'react'

const Navbar = () => {
  return (
    <>
      {/* <header className="flex items-center gap-1 justify-center bg-[#222222] text-white py-2">
        <span className="text-[#D0BCFF]">"20% OFF</span>
        <span> when you book VISA for</span>
        <span className="text-[#D0BCFF]">2+ travelers!</span>
        <span>Save big on your journey now." </span>
      </header> */}

      <nav className='flex z-10 items-center justify-between shadow-navshadow px-8 fixed top-0 left-0 w-full backdrop-blur-sm h-20'>
        <button className="bg-regal-purple py-[0.625rem] px-[1.125rem] text-white rounded-[2rem]">Aerviz</button>
        <div>
          <button className="mr-8 border-solid border-[1px] border-white font-semibold text-white py-[0.625rem] px-[1.125rem] rounded-md">For travel agents</button>
          <button className="bg-[#222222] py-[0.625rem] px-[1.125rem] rounded-md text-white">Login</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar