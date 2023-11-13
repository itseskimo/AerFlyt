import React from 'react'

const VisaStepsHeader = () => {
  return (
    <div className="bg-visaBlue py-6 sm:py-12 w-full my-16 flex items-center justify-center gap-4 md:gap-16">
    <span className="h-[1px] bg-white w-[20%] text-left hidden sm:block"></span>
    <div className="text-white flex flex-col text-center">
      <h1 className="text-[0.75rem] sm:text-[1.25rem]">Complete your VISA application in</h1>
      <h1 className="text-[1.25rem] sm:text-[1.5rem] font-bold">3 Easy steps!</h1>
    </div>
    <span className="h-[1px] bg-white w-[20%] text-right hidden sm:block"></span>
  </div>
    )
}

export default VisaStepsHeader