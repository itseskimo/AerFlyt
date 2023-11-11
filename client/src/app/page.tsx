import Header from "@/components/common/Header/Header"
import ContinentSelector from "@/components/sections/Landing/ContinentSelector/ContinentSelector"
import HeroSection from "@/components/sections/Landing/HeroSection/HeroSection"
import Footer from '@/components/common/Footer/Footer'
import VisaStepsHeader from '@/components/sections/Landing/VisaSteps/VisaStepsHeader'
import VisaStepsDetails from "@/components/sections/Landing/VisaSteps/VisaStepsDetails"
import CountryCard from '@/components/cards/CountryCard/CountryCard'

const Home: React.FC = () => {
  const country = ["/img/dubai.avif", "/img/australia.avif", "/img/egypt.avif", "/img/thailand.avif", "/img/country.png", "/img/myanmar.png", "/img/srilanka.png"];

  return (
    <>
      <Header />
      <HeroSection />
      <ContinentSelector />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 sm:gap-8 mx-8">
        {country.map((item, idx) => (
          <CountryCard key={idx} location={item} />
        ))}
      </div>
      <VisaStepsHeader />
      <VisaStepsDetails />
      <div className="bg-[#7214ff0d] h-28 flex items-center justify-center font-bold text-[1.5rem]">
        <h1>Relax and start planning your trip 🎉</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
