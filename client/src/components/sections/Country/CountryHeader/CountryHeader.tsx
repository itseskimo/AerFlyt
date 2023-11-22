import React from 'react'

const CountryHeader = () => {
    return (
        <section className={`hidden lg:flex   items-center gap-1 justify-center bg-[#222222] text-white p-2  w-full text-[0.875rem]  rounded-[1.25rem] border-solid border-[#7A757F] border-[0.5px]`}>
            <span className="text-[#D0BCFF] font-bold">"20% OFF</span>
            <span> when you book VISA for</span>
            <span className="text-[#D0BCFF]">2+ travelers!</span>
            <span>Save big on your journey now." </span>
        </section>
        )
}

export default CountryHeader