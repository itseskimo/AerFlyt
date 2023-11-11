import React from 'react'

const VisaStepsHeader = () => {
  return (
    <div className="bg-visaBlue h-[10rem] w-full my-16 flex items-center justify-center gap-16">
    <span className="h-[1px] bg-white w-[20%] text-left "></span>
    <div className="text-white flex flex-col text-center">
      <h1 className="text-[1.25rem]">Complete your VISA application in</h1>
      <h1 className="text-[1.5rem] font-bold">3 Easy steps!</h1>
    </div>
    <span className="h-[1px] bg-white w-[20%] text-right"></span>
  </div>
    )
}

export default VisaStepsHeader