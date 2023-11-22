import React from 'react'

const Blogs = () => {
    return (
        <section className='my-12'>
            <div className='mb-6 flex items-center justify-between'>
                <div>
                    <h5 className='text-[1.5rem] font-bold'>Blogs to watch our for</h5>
                    <h5 className='text-[#A9ACAC]'>Blogs to watch our for</h5>
                </div>
                <button className='border-solid border-[1px] border-black py-[10px] px-5'>View All</button>
            </div>

            <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10'>
                {[0, 1, 2].map((blog, i) => (
                    <article key={i} className='flex flex-col gap-3'>
                        <div className='h-[18.75rem] bg-[#dbdbdb]'> </div>
                        <div className='flex gap-4 items-center'>
                            <span className='text-[0.75rem] text-[#23005C] font-semibold bg-[#E9DDFF] py-[0.25rem] px-[0.75rem] rounded-lg'>Category</span>
                            <span className='text-[0.875rem]'>5 min read</span>
                        </div>
                        <h6 className='text-[1.25rem] font-bold'>Blog title heading will go here</h6>
                        <p className='text-[0.875rem] text-[#5C5F5F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <div className='text-visaBlue flex items-center gap-1 mt-1'>Read More
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.97417 7.42725C10.1206 7.5737 10.1206 7.8111 9.97417 7.95755L6.15092 11.7808C6.00447 11.9272 5.76707 11.9272 5.62062 11.7808L5.44382 11.604C5.29737 11.4576 5.29737 11.2201 5.44382 11.0737L8.82512 7.6924L5.44382 4.3111C5.29737 4.16465 5.29737 3.92725 5.44382 3.7808L5.62062 3.604C5.76707 3.45755 6.00447 3.45755 6.15092 3.604L9.97417 7.42725Z" fill="black" />
                            </svg>
                        </div>
                    </article>
                ))}

            </div>
        </section>
    )
}

export default Blogs