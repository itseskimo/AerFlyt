import React from 'react'
import Navbar from '@/components/common/Navbar/Navbar'
import Footer from '@/components/common/Footer/Footer'
import FaqsSection from '@/components/sections/Landing/FaqsSection/FaqsSection'
import Layout from '@/components/layout/layout'
import CountryBanner from '@/components/sections/Country/CountryBanner/CountryBanner'
import CountryTitle from '@/components/sections/Country/CountryTitle/CountryTitle'
import VisaProvidersComparison from '@/components/sections/Country/VisaProvidersComparison/VisaProvidersComparison'
import CountryVisaSteps from '@/components/sections/Country/CountryVisaSteps/CountryVisaSteps'
import DocsRequired from '@/components/sections/Country/DocsRequired/DocsRequired'
import CountryHeader from '@/components/sections/Country/CountryHeader/CountryHeader'
import PaymentSection from '@/components/sections/Country/PaymentSection/PaymentSection'
import ReviewSlider from '@/components/sliders/reviewSlider'

const page = () => {

  return (
    <>
      <Navbar headerShow={false} />
      <CountryBanner />

      <Layout>

        <main className='grid grid-cols-1 lg:grid-cols-[auto,450px] gap-12 xl:gap-20'>
          <aside className=' flex flex-col gap-6 lg:mt-[-60px] order-2 lg:order-1'>
            <CountryHeader />
            <CountryTitle />
            <VisaProvidersComparison />
            <CountryVisaSteps />
            <DocsRequired />
          </aside>

          <PaymentSection />
        </main>

        <ReviewSlider />
        <FaqsSection />
        
      </Layout>

      <Footer />
    </>
  )
}

export default page