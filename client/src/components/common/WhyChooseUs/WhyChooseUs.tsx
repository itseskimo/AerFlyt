import React from 'react'
import { WhyChooseUsData, WhyChooseUsDataMobile } from '@/config/whyChooseUsData'
const WhyChooseUs = () => {


  return (
    <>
      <div className='bg-black py-6 text-center'>
        <h4 className='text-white font-bold text-[1.5rem]'>Why Choose us?</h4>
        <h5 className='text-[#A9ACAC]'>VISA processing services at your fingertips</h5>
      </div>

      <main className='bg-[#191C1D] pb-16 md:py-16 px-8'>

        <section className='hidden md:grid grid-cols-[1fr,20px,1fr,20px,1fr] items-center gap-6'>
          {WhyChooseUsData.slice(0, 5).map((item, idx) => {

            if (idx % 2 !== 0) {
              return <div key={idx} className='h-[100px] w-[1px] bg-[#D1D9E2] rotate-[18deg] justify-self-end'></div>
            }

            return <ul key={idx} className='flex flex-col gap-4 items-center text-center'>
              <li className='text-[1.25rem] text-white'>{item.title}</li>
              <li className='' dangerouslySetInnerHTML={item?.image ? { __html: item.image } : undefined} />
              <li className='text-[1.5rem] font-bold text-[#FFA500]'>{item.subtitle}</li>
              <li className='text-[0.875rem] text-[#A9ACAC] text-center'>{item.description}</li>
            </ul>
          })}

        </section>


        <section className='hidden md:grid  grid-cols-[auto,20px,auto] items-center pt-20 gap-6'>
          {WhyChooseUsData.slice(6, 9).map((item, idx) => {

            if (idx % 2 !== 0) {
              return <div key={idx} className='h-[100px] w-[1px] bg-[#D1D9E2] rotate-[18deg] justify-self-end'></div>
            }

            return <ul key={idx} className='flex flex-col gap-4 items-center text-center'>
              <li className='text-[1.25rem] text-white '>{item.title}</li>
              <li className='' dangerouslySetInnerHTML={item?.image ? { __html: item.image } : undefined} />
              <li className='text-[1.5rem] font-bold text-[#FFA500]'>{item.subtitle}</li>
              <li className='text-[0.875rem] text-[#A9ACAC] text-center'>{item.description}</li>
            </ul>
          })}
        </section>


        <section className='md:hidden grid  grid-cols-1 sm:grid-cols-2  pt-20 gap-16'>
          {WhyChooseUsDataMobile.map((item, idx) => {
            if (idx === WhyChooseUsDataMobile.length - 1) {
              return <ul key={idx} className='flex flex-col gap-4 items-center text-center sm:col-start-1 sm:col-end-3'>
                <li className='text-[1.25rem] text-white '>{item.title}</li>
                <li className='' dangerouslySetInnerHTML={item?.image ? { __html: item.image } : undefined} />
                <li className='text-[1.5rem] font-bold text-[#FFA500]'>{item.subtitle}</li>
                <li className='text-[0.875rem] text-[#A9ACAC] text-center'>{item.description}</li>
              </ul>
            }

            return <ul key={idx} className='flex flex-col gap-4 items-center text-center'>
              <li className='text-[1.25rem] text-white '>{item.title}</li>
              <li className='' dangerouslySetInnerHTML={item?.image ? { __html: item.image } : undefined} />
              <li className='text-[1.5rem] font-bold text-[#FFA500]'>{item.subtitle}</li>
              <li className='text-[0.875rem] text-[#A9ACAC] text-center'>{item.description}</li>
            </ul>
          })}
        </section>





      </main>
    </>
  )
}

export default WhyChooseUs