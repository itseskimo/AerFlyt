import React from 'react'

const Header = () => {
  return (
    <>    
        <header className='flex items-center justify-between shadow-navshadow px-8 fixed top-0 left-0 w-full backdrop-blur-sm h-20'>
        <button className="bg-regal-purple py-[0.625rem] px-[1.125rem] text-white rounded-[2rem]">Aerviz</button>
        <div>
          <button className="mr-8 border-solid border-[1px] border-white font-semibold text-white py-[0.625rem] px-[1.125rem] rounded-md">For travel agents</button>
          <button className="bg-[#222222] py-[0.625rem] px-[1.125rem] rounded-md text-white">Login</button>
        </div>
      </header>
    </>
  )
}

export default Header