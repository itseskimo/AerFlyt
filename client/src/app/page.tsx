
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
import ReviewSlider from '@/components/sliders/reviewSlider'
import WhyChooseUs from "@/components/common/WhyChooseUs/WhyChooseUs"


const Home = () => {
  const country = [{ image: "/img/dubai.avif" }, { image: "/img/australia.avif" }, { image: "/img/egypt.avif" }, { image: "/img/thailand.avif" }, { image: "/img/country.png" }, { image: "/img/myanmar.png" }, { image: "/img/srilanka.png" }];

  return (
    <>
      <Navbar />
      <HeroSection />
      <ContinentSelector />
      <Layout>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 sm:gap-8">
          {country.map((item, idx) => (
            <CountryCard key={idx} {...item} />
          ))}
        </div>
      </Layout>

      <VisaStepsHeader />

      <Layout>
        <VisaStepsDetails />
        <VisaStepsDetailsMobile />
      </Layout>

      <div className="bg-[#7214ff0d] py-10 my-12 flex items-center justify-center font-bold text-[1.25rem] md:text-[1.5rem]">
        <h6>Relax and start planning your trip 🎉</h6>
      </div>

      <WhyChooseUs />

      <Layout>
        <ReviewSlider />
        <FaqsSection />
      </Layout>

      <Footer />
    </>
  );
};

export default Home;
