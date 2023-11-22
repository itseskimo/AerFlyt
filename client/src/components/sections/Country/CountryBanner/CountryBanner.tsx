import React from 'react'
import Layout from '@/components/layout/layout'

const CountryBanner = () => {
    return (
        <div className='h-[18.5rem] relative'>
            <img src='./img/countryBanner.png' className='h-full' />


            <Layout>

                <section className='flex flex-col lg:hidden gap-4 py-8 absolute bottom-0'>
                    <h5 className='text-[1.5rem] lg:text-[2rem] font-bold text-white'>Singapore E-VISA</h5>
                    <article className='bg-[#F6EDFF] p-5 rounded-[1.25rem] '>
                        <h6 className='text-[0.75rem] lg:text-[1rem]'>Apply now to get your verified E-VISA delivered by</h6>
                        <h6 className='text-[1.25rem] lg:text-[1.5rem] font-bold text-visaBlue'>17th Novermber, 2023 at 10:35 PM</h6>
                    </article>
                </section>
            </Layout>


        </div>
    )
}

export default CountryBanner