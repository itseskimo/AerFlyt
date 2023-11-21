import React from 'react'

const WhyChooseUs = () => {
  return (
    <>
      <div className='bg-black py-6 text-center'>
        <h4 className='text-white font-bold text-[1.5rem]'>Why Choose us?</h4>
        <h5 className='text-[#A9ACAC]'>VISA processing services at your fingertips</h5>
      </div>

      <main className='bg-[#191C1D] py-16 px-8'>

        <section className='grid grid-cols-[1fr,20px,1fr,20px,1fr] items-center gap-6'>
          <article className='flex flex-col gap-4 items-center'>
            <h6 className='text-[1.25rem] text-white'>Faster application process</h6>
            <h6 className='text-[1.5rem] font-bold text-[#FFA500]'>3-Step process</h6>
            <p className='text-[0.875rem] text-[#A9ACAC] text-center'>An easy 3-step VISA application process for users to finish it off in 2 - 3 minutes ️⏰</p>
          </article>

          <div className='h-[100px] w-[1px] bg-[#D1D9E2] rotate-[18deg] justify-self-end'></div>

          <article className='flex flex-col gap-4 items-center'>
            <h6 className='text-[1.25rem] text-white'>Faster application process</h6>

            <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="56" height="57" fill="#1E1E1E" />
              <g clipPath="url(#clip0_296_1691)">
                <rect width="1440" height="8300" transform="translate(-692 -4406)" fill="white" />
                <rect width="1440" height="795" transform="translate(-692 -262)" fill="#222222" />
                <rect y="0.5" width="56" height="56" fill="url(#pattern0)" />
              </g>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_296_1691" transform="scale(0.01)" />
                </pattern>
                <clipPath id="clip0_296_1691">
                  <rect width="1440" height="8300" fill="white" transform="translate(-692 -4406)" />
                </clipPath>
                <image id="image0_296_1691" width="100" height="100" xlinkHref="data:image/png;base64,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" />
              </defs>
            </svg>




            <h6 className='text-[1.5rem] font-bold text-[#FFA500]'>3-Step process</h6>
            <p className='text-[0.875rem] text-[#A9ACAC] text-center'>An easy 3-step VISA application process for users to finish it off in 2 - 3 minutes ️⏰</p>
          </article>

          <div className='h-[100px] w-[1px] bg-[#D1D9E2] rotate-[18deg] justify-self-end'></div>

          <article className='flex flex-col gap-4 items-center'>
            <h6 className='text-[1.25rem] text-white'>Faster application process</h6>
            <h6 className='text-[1.5rem] font-bold text-[#FFA500]'>3-Step process</h6>
            <p className='text-[0.875rem] text-[#A9ACAC] text-center'>An easy 3-step VISA application process for users to finish it off in 2 - 3 minutes ️⏰</p>
          </article>
        </section>


        <section className='grid grid-cols-[auto,20px,auto] items-center pt-12 gap-6'>

          <article className='flex flex-col gap-4 items-center'>
            <h6 className='text-[1.25rem] text-white'>Faster application process</h6>
            <h6 className='text-[1.5rem] font-bold text-[#FFA500]'>3-Step process</h6>
            <p className='text-[0.875rem] text-[#A9ACAC] text-center'>An easy 3-step VISA application process for users to finish it off in 2 - 3 minutes ️⏰</p>
          </article>

          <div className='h-[100px] w-[1px] bg-[#D1D9E2] rotate-[18deg] justify-self-end'></div>

          <article className='flex flex-col gap-4 items-center'>
            <h6 className='text-[1.25rem] text-white'>Faster application process</h6>


            <h6 className='text-[1.5rem] font-bold text-[#FFA500]'>3-Step process</h6>
            <p className='text-[0.875rem] text-[#A9ACAC] text-center'>An easy 3-step VISA application process for users to finish it off in 2 - 3 minutes ️⏰</p>
          </article>

        </section>

      </main>
    </>
  )
}

export default WhyChooseUs