
export default function Home() {
  return (
    <>
      <header className='flex items-center justify-between shadow-navshadow px-8 fixed top-0 left-0 w-full backdrop-blur-sm h-20'>
        <button className="bg-regal-purple py-[0.625rem] px-[1.125rem] text-white rounded-[2rem]">Aerviz</button>
        <div>
          <button className="mr-8 border-solid border-[1px] border-white font-semibold text-white py-[0.625rem] px-[1.125rem] rounded-md">For travel agents</button>
          <button className="bg-[#222222] py-[0.625rem] px-[1.125rem] rounded-md text-white">Login</button>
        </div>
      </header>













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

          </div>

          <section className="flex items-center justify-between mt-20 mb-10">

            <div className="flex items-center relative w-[60%]">
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

            <div className="flex items-center relative w-[35%]">
              <svg className="absolute  w-10 left-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C15.05 13.06 15.06 13.08 15.07 13.09C16.21 13.92 17 15.03 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z" fill="#222222" />
              </svg>

              <input
                className=" outline-none w-full text-[1.25rem] font-bold  py-[1rem] px-[4.5rem] rounded-[2rem] placeholder:text-black"
                placeholder="Travellers?"
              />
            </div>

          </section>

          <div className="flex items-center justify-center">
            <button className="bg-[#FFA500] text-[1.25rem] font-bold  py-[1rem] px-[4.5rem] rounded-[2rem]">Apply for E-Visa</button>
          </div>


        </div>
      </main>






















    </>
  )
}
