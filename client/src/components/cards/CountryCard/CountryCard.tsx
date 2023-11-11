import React from 'react'

const CountryCard = () => {
    return (
        <div className="relative border-solid border-[0.5px] border-gray-400 rounded-[2rem] flex flex-col overflow-hidden">

            <span className="bg-visaBlue rounded-r-xl absolute top-10 text-white font-semibold px-5 py-2">Visa in 1 week</span>
            {/* <span className="bg-[#222222] rounded-r-xl absolute top-10 text-white font-semibold px-5 py-2">Visa on arrival</span> */}
            {/* <span className="bg-[#F2F4F4] rounded-r-xl absolute top-10 font-semibold px-5 py-2">No VISA required</span> */}

            <div className="p-5 ">
                <img  alt="Dubai Image" className="h-[20rem] w-full object-cover rounded-3xl" />

                <div className="pt-4">
                    <h1 className="text-[1.5rem] font-bold">Singapore</h1>
                    <ul className="flex items-center justify-between">
                        <li className="text-[0.875rem] text-[#5C5F5F]">VISA delivery by</li>
                        <li className="text-visaBlue font-semibold text-right">17th Oct |  12:30 <br className="hidden xs:block md:hidden"></br> PM</li>
                    </ul>

                    <section className="flex justify-between mt-3">
                        <ul className="flex flex-col">
                            <li className="text-[1.25rem] text-visaBlue font-bold">FARE (₹)</li>
                            <li className=" text-[0.875rem] text-[#5C5F5F]">Starting from</li>
                        </ul>
                        <ul className="flex flex-col items-end">
                            <li className="text-[1.75rem] text-visaBlue font-bold">₹ 4,080</li>
                            <li className=" text-[0.5rem] text-[#5C5F5F]">(includes all govt. related fees)</li>
                        </ul>
                    </section>

                </div>
            </div>

            <button className="bg-visaBlue text-white font-bold py-3">Apply for E-Visa</button>
        </div>
    )
}

export default CountryCard