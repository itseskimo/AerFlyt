import React from 'react'
import Navbar from '@/components/common/Navbar/Navbar'
import Footer from '@/components/common/Footer/Footer'
import FaqsSection from '@/components/sections/Landing/FaqsSection/FaqsSection'
import Layout from '@/components/layout/layout'
import CountryBanner from '@/components/sections/Country/CountryBanner/CountryBanner/'
import CountryTitle from '@/components/sections/Country/CountryTitle/CountryTitle'
import VisaStepsDetailsMobile from '@/components/sections/Landing/VisaSteps/VisaStepsDetailsMobile'
import VisaProvidersComparison from '@/components/sections/Country/VisaProvidersComparison/VisaProvidersComparison'
import CountryVisaSteps from '@/components/sections/Country/CountryVisaSteps/CountryVisaSteps'
const page = () => {
  return (
    <>
      <Layout>
        <CountryBanner />

        <main className='grid grid-cols-2'>

          <aside className=' flex flex-col gap-6'>
            <CountryTitle />
            <VisaProvidersComparison />
            <CountryVisaSteps />
          </aside>

<aside>
  
</aside>


        </main>
        <FaqsSection />
      </Layout>
      <Footer />
    </>
  )
}

export default page