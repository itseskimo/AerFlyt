'use client'
import Navbar from "@/components/common/Navbar/Navbar"
import ContinentSelector from "@/components/sections/Landing/ContinentSelector/ContinentSelector"
import HeroSection from "@/components/sections/Landing/HeroSection/HeroSection"
import Footer from '@/components/common/Footer/Footer'
import VisaStepsHeader from '@/components/sections/Landing/VisaSteps/VisaStepsHeader'
import VisaStepsDetails from "@/components/sections/Landing/VisaSteps/VisaStepsDetails"
import VisaStepsDetailsMobile from "@/components/sections/Landing/VisaSteps/VisaStepsDetailsMobile"
import CountryCard from '@/components/cards/CountryCard/CountryCard'
import FaqsSection from "@/components/sections/Landing/FaqsSection/FaqsSection"
import Layout from "@/components/layout/layout"




const Home = () => {
  const country = [{ image: "/img/dubai.avif" }, { image: "/img/australia.avif" }, { image: "/img/egypt.avif" }, { image: "/img/thailand.avif" }, { image: "/img/country.png" }, { image: "/img/myanmar.png" }, { image: "/img/srilanka.png" }];

  return (
    <>
      <Navbar />
      <HeroSection />
      <ContinentSelector />

      <Layout>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 sm:gap-8">
          {country.map((item, idx) => (
            <CountryCard key={idx} {...item} />
          ))}
        </div>
      </Layout>

      <VisaStepsHeader />

      <Layout>
        <VisaStepsDetails />
        <VisaStepsDetailsMobile />
        <FaqsSection />
      </Layout>

      <div className="bg-[#7214ff0d] h-28 flex items-center justify-center font-bold text-[1.5rem]">
        <h1>Relax and start planning your trip 🎉</h1>
      </div>
      <Footer />





    </>
  );
};

export default Home;
