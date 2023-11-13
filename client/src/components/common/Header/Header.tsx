import React from 'react'

interface headerProps {
    scrolling: boolean,
    headerOpacityClass: boolean,
    positionClass: string
}

const Header = ({ scrolling, headerOpacityClass, positionClass }: headerProps) => {

    let dynamic = !headerOpacityClass ? 'opacity-100' : 'opacity-0 hidden';
    dynamic = headerOpacityClass ? 'opacity-100' : 'opacity-0'



    return (
        <header className={`flex items-center gap-1 justify-center bg-[#222222] text-white py-2 transition-all duration-500  w-full text-[0.7rem] md:text-[1rem] ${positionClass} ${dynamic}`}>
            <span className="text-[#D0BCFF]">"20% OFF</span>
            <span> when you book VISA for</span>
            <span className="text-[#D0BCFF]">2+ travelers!</span>
            <span>Save big on your journey now." </span>
        </header>
    )
}

export default Header