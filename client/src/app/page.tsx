import Header from "@/components/common/Header/Header"
import ContinentSelector from "@/components/sections/Landing/ContinentSelector/ContinentSelector"
import HeroSection from "@/components/sections/Landing/HeroSection/HeroSection"

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ContinentSelector />





      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 sm:gap-8 mx-8">

        {[0, 1, 3, 4].map((item) => (
          <div key={item} className="border-solid border-[0.5px] border-gray-400 rounded-[2rem] flex flex-col  p-5">
            <img src="./img/country.png" />

            <div className="py-5">
              <h1 className="text-[1.5rem] font-bold">Singapore</h1>
              <div className="flex items-center justify-between">
                <span className="text-[0.875rem] text-[#5C5F5F]">VISA delivery by</span>
                <span className="text-visaBlue font-semibold">17th Oct | 12:30 PM</span>
              </div>

              <section className="flex justify-between mt-3">
                <div className="flex flex-col">
                  <span className="text-[1.25rem] text-visaBlue font-bold">FARE (₹)</span>
                  <span className=" text-[0.875rem] text-[#5C5F5F]">Starting from</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[1.75rem] text-visaBlue font-bold">₹ 4,080</span>
                  <span className=" text-[0.5rem] text-[#5C5F5F]">(includes all govt. related fees)</span>
                </div>
              </section>




            </div>
            <button className="bg-visaBlue text-white font-bold py-3">Apply for E-Visa</button>
          </div>
        ))}


      </div>

























    </>
  )
}
