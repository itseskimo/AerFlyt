'use client'
import Header from "@/components/common/Header/Header"
import ContinentSelector from "@/components/sections/Landing/ContinentSelector/ContinentSelector"
import HeroSection from "@/components/sections/Landing/HeroSection/HeroSection"
import Footer from '@/components/common/Footer/Footer'
import VisaStepsHeader from '@/components/sections/Landing/VisaSteps/VisaStepsHeader'
import VisaStepsDetails from "@/components/sections/Landing/VisaSteps/VisaStepsDetails"
import CountryCard from '@/components/cards/CountryCard/CountryCard'
import FAQList from "@/components/common/Faq/Faq"
import AboutUs from "@/components/sections/Landing/AboutUs/AboutUs"






const Home = () => {
  const country = [{ image: "/img/dubai.avif" }, { image: "/img/australia.avif" }, { image: "/img/egypt.avif" }, { image: "/img/thailand.avif" }, { image: "/img/country.png" }, { image: "/img/myanmar.png" }, { image: "/img/srilanka.png" }];

  return (
    <>
      <Header />
      <HeroSection />
      <ContinentSelector />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 sm:gap-8 mx-8">
        {country.map((item, idx) => (
          <CountryCard key={idx} {...item} />
        ))}
      </div>
      <VisaStepsHeader />
      <VisaStepsDetails />





      <main className="py-24">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[1.5rem]">FAQS</h1>
          <h2 className="text-[#5C5F5F]">Frequently asked questions</h2>
        </div>
        <FAQList />
      </main>


      <AboutUs />

      <div className="bg-[#7214ff0d] h-28 flex items-center justify-center font-bold text-[1.5rem]">
        <h1>Relax and start planning your trip 🎉</h1>
      </div>
      <Footer />





    </>
  );
};

export default Home;
