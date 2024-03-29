'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton } from '../elements/carouselBtns/carouselBtns'
import { useState, useEffect, useCallback } from 'react'


const reviewSlider = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)

  }, [emblaApi, onInit, onSelect])


  return (
    <div className="my-8 " >

      <div className='text-center pb-6'>
        <h4 className="text-[14px] md:text-[1.25rem]  text-[#A9ACAC]">Didn’t trust us?</h4>
        <h5 className="text-[14px] md:text-[1.5rem]  font-bold">Meet Our Travelers </h5>
        <h5 className="text-[14px] md:text-[1.5rem]   font-bold"> <span className='text-visaBlue'>Aerviz</span> Visa Stories Uncovered</h5>
      </div>

      <section className="embla" ref={emblaRef}>
        <div className="embla__container justify-between ">

          {
            [0, 1, 2, 3, 4, 5].map((item, idx) => (
              <section key={idx} className='embla__slide  mr-[15px] lg:mr-[25px]  my-[10px] shadow-reviewShadow w-full sm:w-[60%] lg:w-[40%] min-w-[400px] p-5 flex flex-col gap-3'>

                <div className='relative h-[12.5rem] bg-black'>
                  <svg className='absolute cursor-pointer top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%]' xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                    <g opacity="0.7">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.83398 31.9997C5.83398 17.2721 17.7731 5.33301 32.5007 5.33301C39.5731 5.33301 46.3559 8.14253 51.3569 13.1435C56.3578 18.1445 59.1673 24.9273 59.1673 31.9997C59.1673 46.7273 47.2283 58.6664 32.5007 58.6664C17.7731 58.6664 5.83398 46.7273 5.83398 31.9997ZM27.6208 43.4131L43.1674 33.7064C43.7492 33.3338 44.1011 32.6906 44.1011 31.9997C44.1011 31.3089 43.7492 30.6656 43.1674 30.2931L27.5674 20.5864C26.953 20.199 26.1768 20.1752 25.5398 20.5241C24.9028 20.8731 24.505 21.54 24.5008 22.2664V41.7331C24.4922 42.4771 24.8973 43.1644 25.5524 43.5171C26.2075 43.8699 27.0043 43.8298 27.6208 43.4131Z" fill="white" />
                    </g>
                  </svg>
                </div>

                <article className='flex flex-col gap-2'>
                  <p className='text-[1.25rem] font-semibold'>The process of applying for VISA is so seamless and fast, saved a ton of time for me</p>
                  <p className='text-[#A9ACAC] text-[0.75rem] '>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.</p>
                  <p className='text-right text-visaBlue text-[0.75rem]'>View more</p>
                </article>

                <div className='flex items-center gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.4687 22.4997C18.3109 22.5004 18.1568 22.4511 18.0286 22.3591L12 17.9885L5.97139 22.3591C5.84259 22.4525 5.68742 22.5026 5.52832 22.502C5.36921 22.5014 5.21441 22.4502 5.08629 22.3559C4.95818 22.2615 4.86339 22.1289 4.81563 21.9771C4.76787 21.8254 4.76961 21.6623 4.82061 21.5116L7.17186 14.5474L1.07811 10.3685C0.946113 10.2781 0.846491 10.1478 0.793797 9.99675C0.741103 9.84568 0.7381 9.68172 0.785225 9.52883C0.83235 9.37593 0.927135 9.24211 1.05573 9.14692C1.18432 9.05173 1.33999 9.00016 1.49998 8.99974H9.0178L11.2865 2.01771C11.3354 1.86697 11.4308 1.73558 11.559 1.6424C11.6871 1.54922 11.8415 1.49902 12 1.49902C12.1584 1.49902 12.3128 1.54922 12.441 1.6424C12.5692 1.73558 12.6645 1.86697 12.7134 2.01771L14.9822 9.00208H22.5C22.6602 9.002 22.8162 9.05322 22.9452 9.14823C23.0741 9.24323 23.1693 9.37704 23.2167 9.53005C23.2642 9.68307 23.2613 9.84724 23.2087 9.99854C23.1561 10.1498 23.0564 10.2803 22.9242 10.3708L16.8281 14.5474L19.178 21.5097C19.216 21.6225 19.2267 21.7426 19.2092 21.8603C19.1917 21.978 19.1464 22.0898 19.0771 22.1865C19.0078 22.2832 18.9165 22.3621 18.8107 22.4165C18.7049 22.471 18.5877 22.4995 18.4687 22.4997Z" fill="#FFA500" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.4687 22.4997C18.3109 22.5004 18.1568 22.4511 18.0286 22.3591L12 17.9885L5.97139 22.3591C5.84259 22.4525 5.68742 22.5026 5.52832 22.502C5.36921 22.5014 5.21441 22.4502 5.08629 22.3559C4.95818 22.2615 4.86339 22.1289 4.81563 21.9771C4.76787 21.8254 4.76961 21.6623 4.82061 21.5116L7.17186 14.5474L1.07811 10.3685C0.946113 10.2781 0.846491 10.1478 0.793797 9.99675C0.741103 9.84568 0.7381 9.68172 0.785225 9.52883C0.83235 9.37593 0.927135 9.24211 1.05573 9.14692C1.18432 9.05173 1.33999 9.00016 1.49998 8.99974H9.0178L11.2865 2.01771C11.3354 1.86697 11.4308 1.73558 11.559 1.6424C11.6871 1.54922 11.8415 1.49902 12 1.49902C12.1584 1.49902 12.3128 1.54922 12.441 1.6424C12.5692 1.73558 12.6645 1.86697 12.7134 2.01771L14.9822 9.00208H22.5C22.6602 9.002 22.8162 9.05322 22.9452 9.14823C23.0741 9.24323 23.1693 9.37704 23.2167 9.53005C23.2642 9.68307 23.2613 9.84724 23.2087 9.99854C23.1561 10.1498 23.0564 10.2803 22.9242 10.3708L16.8281 14.5474L19.178 21.5097C19.216 21.6225 19.2267 21.7426 19.2092 21.8603C19.1917 21.978 19.1464 22.0898 19.0771 22.1865C19.0078 22.2832 18.9165 22.3621 18.8107 22.4165C18.7049 22.471 18.5877 22.4995 18.4687 22.4997Z" fill="#5C5F5F" />
                  </svg>
                </div>

                <div>
                  <h5 className='font-semibold'>Priya Shah</h5>
                  <h6 className='text-[#5C5F5F] text-[0.75rem]'>Pune</h6>
                </div>



                <div className='flex items-center gap-2'>

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g clipPath="url(#clip0_1979_900)">
                      <path d="M28.4444 4.44434H3.55556C2.61256 4.44434 1.70819 4.81894 1.0414 5.48573C0.374602 6.15253 0 7.0569 0 7.99989L0 11.9999H32V7.99989C32 7.0569 31.6254 6.15253 30.9586 5.48573C30.2918 4.81894 29.3874 4.44434 28.4444 4.44434Z" fill="#141414" />
                      <path d="M0 24C0 24.943 0.374602 25.8474 1.0414 26.5142C1.70819 27.181 2.61256 27.5556 3.55556 27.5556H28.4444C29.3874 27.5556 30.2918 27.181 30.9586 26.5142C31.6254 25.8474 32 24.943 32 24V20H0V24Z" fill="#007A3D" />
                      <path d="M0 12H32V20H0V12Z" fill="#EEEEEE" />
                      <path d="M1.20089 5.33691C0.823292 5.67019 0.520097 6.08005 0.313191 6.53923C0.106285 6.99841 -0.000479004 7.49638 1.61552e-06 8.00002V24C1.61552e-06 25.0605 0.464002 26.0125 1.20089 26.664L15.5556 16L1.20089 5.33691Z" fill="#CE1126" />
                      <path d="M5.89058 17.1896L6.82925 18.0571L6.73592 16.7816L7.99992 16.5887L6.94481 15.8669L7.58214 14.7585L6.35992 15.1327L5.89058 13.9434L5.42125 15.1327L4.19903 14.7585L4.83547 15.8669L3.78125 16.5887L5.04436 16.7816L4.95192 18.0571L5.89058 17.1896Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1979_900">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className='text-[#5C5F5F] text-[0.75rem] '>Jordan (60 days Business VISA)</span>

                </div>
              </section>
            ))
          }






        </div>
        <div className="embla__buttons">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>


      </section>
    </div>

  )
}

export default reviewSlider