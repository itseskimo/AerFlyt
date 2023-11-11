import Header from "@/components/common/Header/Header"
import ContinentSelector from "@/components/sections/Landing/ContinentSelector/ContinentSelector"
import HeroSection from "@/components/sections/Landing/HeroSection/HeroSection"

export default function Home() {

  const country =["/img/dubai.avif","/img/australia.avif","/img/egypt.avif","/img/thailand.avif","/img/country.png","/img/myanmar.png","/img/srilanka.png"]
  return (
    <>
      <Header />
      <HeroSection />
      <ContinentSelector />





      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 sm:gap-8 mx-8">

        {country.map((item) => (
          <div key={item} className="relative border-solid border-[0.5px] border-gray-400 rounded-[2rem] flex flex-col overflow-hidden">

            <span className="bg-visaBlue rounded-r-xl absolute top-10 text-white font-semibold px-5 py-2">Visa in 1 week</span>
            {/* <span className="bg-[#222222] rounded-r-xl absolute top-10 text-white font-semibold px-5 py-2">Visa on arrival</span> */}
            {/* <span className="bg-[#F2F4F4] rounded-r-xl absolute top-10 font-semibold px-5 py-2">No VISA required</span> */}


            <div className="p-5 ">
            <img src={item} alt="Dubai Image" className="h-[20rem] w-full object-cover rounded-3xl" style={{ objectPosition: '55%' }} />
              {/* <div style={{ backgroundPositionX: '55%' }} className="bg-[url(/img/dubai.avif)] h-[20rem] w-full  bg-no-repeat bg-cover rounded-3xl "></div> */}
              <div className="pt-4">
                <h1 className="text-[1.5rem] font-bold">Singapore</h1>
                <ul className="flex items-center justify-between">
                  <li className="text-[0.875rem] text-[#5C5F5F]">VISA delivery by</li>
                  <li className="text-visaBlue font-semibold text-right">17th Oct |  12:30 <br className="hidden xs:block md:hidden"></br> PM</li>
                </ul>

                <section className="flex justify-between mt-3">
                  <ul className="flex flex-col">
                    <li className="text-[1.25rem] text-visaBlue font-bold">FARE (₹)</li>
                    <li className=" text-[0.875rem] text-[#5C5F5F]">Starting from</li>
                  </ul>
                  <ul className="flex flex-col items-end">
                    <li className="text-[1.75rem] text-visaBlue font-bold">₹ 4,080</li>
                    <li className=" text-[0.5rem] text-[#5C5F5F]">(includes all govt. related fees)</li>
                  </ul>
                </section>

              </div>
            </div>

            <button className="bg-visaBlue text-white font-bold py-3">Apply for E-Visa</button>
          </div>
        ))}
      </div>





      {/* <div className="rounded-t-brand font-basier group relative w-full grow cursor-pointer place-items-center overflow-hidden rounded-2xl border transition-all md:max-w-xl md:hover:shadow-lg"><div className="rounded-t-brand relative overflow-hidden"><img alt="" srcSet="/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fatlys%2F1fe815bc-2f6f-4d4e-a088-f31b8757f653_photo-1526481280693-3bfa7568e0f3.avif%3Fauto%3Dcompress%2Cformat&w=384&q=80 1x, /_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fatlys%2F1fe815bc-2f6f-4d4e-a088-f31b8757f653_photo-1526481280693-3bfa7568e0f3.avif%3Fauto%3Dcompress%2Cformat&w=640&q=80 2x" src="./img/dubai.avif" width="297.1" height={198} decoding="async" data-nimg="future" className="rounded-t-brand h-[300px] w-full object-cover md:h-[280px] md:transition-all md:ease-in-out 2xl:h-[270px] " style={{color: 'transparent'}} /><span className="absolute -bottom-1 left-4 inline-flex w-auto items-center gap-2 rounded-t-2xl bg-white px-3 py-1.5"><svg fill="none" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg"><path d="M9.7874 12.8405L11.5953 14.7812L15.2126 10.8982" stroke="#697586" strokeLinecap="round" strokeWidth="1.4" /><path d="M12.5 0.78125L12.949 2.16322H14.4021L13.2265 3.01732L13.6756 4.39928L12.5 3.54518L11.3244 4.39928L11.7735 3.01732L10.5979 2.16322H12.051L12.5 0.78125Z" fill="#697586" /><path d="M12.5 20.7812L12.949 22.1632H14.4021L13.2265 23.0173L13.6756 24.3993L12.5 23.5452L11.3244 24.3993L11.7735 23.0173L10.5979 22.1632H12.051L12.5 20.7812Z" fill="#697586" /><path d="M22.8923 6.78125L21.92 7.8611L22.6466 9.11951L21.3191 8.52848L20.3468 9.60834L20.4987 8.16321L19.1712 7.57219L20.5926 7.27007L20.7445 5.82495L21.471 7.08336L22.8923 6.78125Z" fill="#697586" /><path d="M5.57202 16.7812L4.59972 17.8611L5.32626 19.1195L3.9988 18.5285L3.0265 19.6083L3.17839 18.1632L1.85093 17.5722L3.27226 17.2701L3.42415 15.8249L4.15069 17.0834L5.57202 16.7812Z" fill="#697586" /><path d="M18.5001 2.38904L18.198 3.81037L19.4564 4.53691L18.0113 4.6888L17.7092 6.11013L17.1182 4.78267L15.673 4.93456L16.7529 3.96226L16.1619 2.6348L17.4203 3.36134L18.5001 2.38904Z" fill="#697586" /><path d="M8.50012 19.7094L8.198 21.1307L9.45641 21.8572L8.01129 22.0091L7.70917 23.4304L7.11815 22.103L5.67303 22.2549L6.75288 21.2826L6.16186 19.9551L7.42026 20.6817L8.50012 19.7094Z" fill="#697586" /><path d="M4.5 12.7812L3.11803 13.2303L3.11803 14.6834L2.26393 13.5078L0.881966 13.9568L1.73607 12.7812L0.881966 11.6057L2.26393 12.0547L3.11803 10.8791L3.11803 12.3322L4.5 12.7812Z" fill="#697586" /><path d="M5.57178 8.78125L4.15045 8.47913L3.4239 9.73754L3.27201 8.29242L1.85068 7.9903L3.17814 7.39928L3.02625 5.95415L3.99856 7.03401L5.32602 6.44298L4.59947 7.70139L5.57178 8.78125Z" fill="#697586" /><path d="M8.49988 5.85303L7.42003 4.88072L6.16162 5.60727L6.75264 4.27981L5.67279 3.3075L7.11792 3.45939L7.70894 2.13193L8.01105 3.55326L9.45618 3.70515L8.19777 4.4317L8.49988 5.85303Z" fill="#697586" /></svg><span className="font-medium text-gray-800">Sticker Visa</span><svg className="absolute" fill="none" height={18} viewBox="0 0 13 18" width={13} xmlns="http://www.w3.org/2000/svg" style={{right: '-30px', width: '49px', height: '22px', bottom: '4px'}}><path d="M1.97444 0.296448C1.97444 11.8428 6.32221 17.9913 12.2495 17.9913L0.7395 18.2182L1.97444 0.296448Z" fill="white" /></svg><svg className="absolute" fill="none" height={18} viewBox="0 0 13 18" width={13} xmlns="http://www.w3.org/2000/svg" style={{left: '-30px', width: '49px', height: '22px', bottom: '4px', transform: 'scaleX(-1)'}}><path d="M1.97444 0.296448C1.97444 11.8428 6.32221 17.9913 12.2495 17.9913L0.7395 18.2182L1.97444 0.296448Z" fill="white" /></svg></span></div><div className="mt-2 flex flex-col px-2.5 pb-4 pt-2"><div className="flex flex-row items-center justify-between gap-2"><h3 className="font-basier text-lg font-semibold text-black">Japan</h3><span className="text-center text-base font-medium text-black">₹6,500</span></div><div className="flex items-center justify-between"><p>Get on <span className="text-primary font-bold">27 Nov, 5:00 PM</span></p></div></div><a className="absolute inset-0" href="/en-IN/apply-japan-visa" aria-label="Apply for Japan Visa" /></div> */}


















    </>
  )
}
