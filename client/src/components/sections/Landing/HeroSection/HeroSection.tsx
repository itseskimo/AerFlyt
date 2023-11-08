import React from 'react'

const HeroSection = () => {
  return (
    <>
        
        <main className="bg-[url(/img/Landing/LandingBg.jpg)] bg-no-repeat bg-cover py-28 ">
        <div className="mx-8">



          <div className="flex flex-col gap-2 justify-center items-center cursor-default">

            <div className="text-[3rem]  text-white font-bold text-center">
              <h1>Quick & Easy Visa Applications,</h1>
              <h2>Done in Minutes</h2>
            </div>

            <p className="text-lg text-white">Complete your Visa application in 2 - 3 minutes</p>

            <div className="flex items-center gap-5 mt-5">
              <span className="bg-regal-purple shadow-elementShadow text-white py-[0.75rem] px-[2rem] rounded-[2rem] ">6.6K visas processed</span>
              <span className="bg-regal-purple shadow-elementShadow text-white py-[0.75rem] px-[2rem] rounded-[2rem] ">30+ countries E-VISA</span>
              <span className="bg-regal-purple shadow-elementShadow text-white py-[0.75rem] px-[2rem] rounded-[2rem] ">XX happy customers</span>
            </div>


            <div className="flex items-center relative w-[60%] mt-16 mb-10">
              <svg className="absolute  w-10 left-4 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_987_3378)">
                  <path d="M17.5808 15.9434C18.8002 14.3748 19.5263 12.4037 19.5263 10.2631C19.5263 5.14724 15.379 1 10.2632 1C5.14725 1 1 5.14724 1 10.2631C1 15.379 5.14725 19.5262 10.2632 19.5262C12.4037 19.5262 14.3748 18.8002 15.9433 17.5809L21.0234 22.6609C21.4755 23.113 22.2087 23.113 22.6609 22.6609C23.113 22.2087 23.113 21.4755 22.6609 21.0234L17.5808 15.9434Z" stroke="black" strokeWidth="2" strokeLinecap="square" />
                </g>
                <defs>
                  <clipPath id="clip0_987_3378">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <input
                className=" text-[1.25rem] w-full outline-none font-bold  py-[1rem] px-[4.5rem] rounded-[2rem] placeholder:text-black"
                placeholder="Where to?"
              />
            </div>
          </div>


          

         


          <div className="flex items-center justify-center">
            <button className="bg-[#FFA500] text-[1.25rem] font-bold  py-[1rem] px-[4.5rem] rounded-[2rem]">Apply for E-Visa</button>
          </div>


        </div>
      </main>

    
    </>
  )
}

export default HeroSection


   {/* <div className="flex items-center relative w-[35%]">
              <svg className="absolute  w-10 left-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C15.05 13.06 15.06 13.08 15.07 13.09C16.21 13.92 17 15.03 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z" fill="#222222" />
              </svg>

              <input
                className=" outline-none w-full text-[1.25rem] font-bold  py-[1rem] pl-[4.5rem] pr-[8rem] rounded-[2rem] placeholder:text-black"
                placeholder="Travellers?"
              />

              <div className="absolute right-7 text-[1.25rem] flex items-center gap-4">

                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12.0007 8.66683H4.00065C3.63398 8.66683 3.33398 8.36683 3.33398 8.00016C3.33398 7.6335 3.63398 7.3335 4.00065 7.3335H12.0007C12.3673 7.3335 12.6673 7.6335 12.6673 8.00016C12.6673 8.36683 12.3673 8.66683 12.0007 8.66683Z" fill="black" />
                </svg>


                <span >3</span>

                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M15.334 22.0002H16.6673V16.6668H22.0007V15.3335H16.6673V10.0002H15.334V15.3335H10.0007V16.6668H15.334V22.0002ZM7.48732 26.6668C6.87398 26.6668 6.36198 26.4615 5.95132 26.0508C5.53976 25.6393 5.33398 25.1268 5.33398 24.5135V7.48683C5.33398 6.8735 5.53976 6.3615 5.95132 5.95083C6.36198 5.53927 6.87398 5.3335 7.48732 5.3335H24.514C25.1273 5.3335 25.6393 5.53927 26.05 5.95083C26.4615 6.3615 26.6673 6.8735 26.6673 7.48683V24.5135C26.6673 25.1268 26.462 25.6388 26.0513 26.0495C25.6398 26.4611 25.1273 26.6668 24.514 26.6668H7.48732ZM7.48732 25.3335H24.514C24.7184 25.3335 24.9064 25.2482 25.078 25.0775C25.2487 24.9059 25.334 24.7179 25.334 24.5135V7.48683C25.334 7.28238 25.2487 7.09438 25.078 6.92283C24.9064 6.75216 24.7184 6.66683 24.514 6.66683H7.48732C7.28287 6.66683 7.09487 6.75216 6.92332 6.92283C6.75265 7.09438 6.66732 7.28238 6.66732 7.48683V24.5135C6.66732 24.7179 6.75265 24.9059 6.92332 25.0775C7.09487 25.2482 7.28287 25.3335 7.48732 25.3335Z" fill="#7214FF" />
                </svg>


              </div>
            </div> */}