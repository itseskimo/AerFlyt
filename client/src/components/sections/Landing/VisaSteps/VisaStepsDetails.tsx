import React from 'react'

const VisaStepsDetails = () => {
  return (
    <main className="hidden sm:grid grid-cols-[1fr,80px,1fr] ">

      <aside className="flex flex-col gap-8">

        <h1 className="text-visaBlue flex gap-2 items-end text-[1rem] xl:text-[1.25rem] font-semibold flex-wrap">Step 1:<span className="font-bold text-[1.25rem] xl:text-[1.5rem]">Select your destination</span> </h1>
        <p className="text-[#5C5F5F] text-[0.875rem] lg:text-[1rem]">Search for the country/Select a country from the list to start your VISA application process.</p>

        <div className="bg-[#FFFBFF] p-4 rounded-[1.25rem] shadow-listBoxShadow">
          <h1 className="flex items-start gap-3 text-[1rem] lg:text-[1.25rem] mb-2">
            <svg className='shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 1.99805C17.524 1.99805 22.002 6.47605 22.002 12C22.002 17.523 17.524 22 12 22C6.476 22.001 2 17.523 2 12C1.999 6.47605 6.476 1.99805 12 1.99805ZM12 3.49805C10.8758 3.48585 9.76036 3.69675 8.71822 4.11852C7.67607 4.54029 6.72793 5.16457 5.92866 5.95521C5.12939 6.74586 4.49487 7.68718 4.06182 8.72469C3.62877 9.7622 3.4058 10.8753 3.4058 11.9995C3.4058 13.1238 3.62877 14.2369 4.06182 15.2744C4.49487 16.3119 5.12939 17.2532 5.92866 18.0439C6.72793 18.8345 7.67607 19.4588 8.71822 19.8806C9.76036 20.3023 10.8758 20.5132 12 20.501C14.2388 20.4768 16.3776 19.5704 17.9521 17.9787C19.5267 16.387 20.4098 14.2384 20.4098 11.9995C20.4098 9.76065 19.5267 7.61211 17.9521 6.02041C16.3776 4.42871 14.2388 3.52233 12 3.49805ZM11.996 10.498C12.1774 10.4978 12.3528 10.5633 12.4896 10.6825C12.6264 10.8016 12.7153 10.9663 12.74 11.146L12.747 11.248L12.751 16.75C12.7529 16.9414 12.6817 17.1263 12.5517 17.2668C12.4218 17.4074 12.2431 17.4929 12.0521 17.5059C11.8612 17.519 11.6725 17.4585 11.5247 17.337C11.3768 17.2154 11.2811 17.0419 11.257 16.852L11.251 16.751L11.247 11.249C11.247 11.0501 11.326 10.8594 11.4667 10.7187C11.6073 10.5781 11.7981 10.499 11.997 10.499L11.996 10.498ZM12.001 7.00105C12.1348 6.99681 12.2681 7.01951 12.3929 7.06778C12.5177 7.11605 12.6316 7.18892 12.7277 7.28206C12.8239 7.3752 12.9003 7.4867 12.9525 7.60996C13.0047 7.73321 13.0316 7.8657 13.0316 7.99955C13.0316 8.1334 13.0047 8.26588 12.9525 8.38914C12.9003 8.51239 12.8239 8.62389 12.7277 8.71703C12.6316 8.81017 12.5177 8.88304 12.3929 8.93131C12.2681 8.97959 12.1348 9.00228 12.001 8.99805C11.7417 8.98984 11.4957 8.88104 11.3151 8.69468C11.1346 8.50832 11.0336 8.25903 11.0336 7.99955C11.0336 7.74007 11.1346 7.49077 11.3151 7.30441C11.4957 7.11805 11.7417 7.00926 12.001 7.00105Z" fill="#7214FF" />
            </svg>
            <span className='mt-[-2px]'>Provide other details about your VISA requirement</span>
          </h1>

          <ul className="ml-14 flex flex-col gap-2 text-[0.875rem]">
            <li className="text-[#5C5F5F] list-disc">Number of travelers</li>
            <li className="text-[#5C5F5F] list-disc">Type of VISA</li>
            <li className="text-[#5C5F5F] list-disc">Validity of your VISA</li>
          </ul>
        </div>


        <div className="flex items-center justify-center">
          <img src="/img/landing/cloudstorage.png" className="w-[50%] h-[90%]" />
        </div>




        <div className="flex flex-col gap-4">
          <h1 className="text-[#222222] flex gap-2 items-end text-[1rem] xl:text-[1.25rem] font-semibold flex-wrap">Step 3:<span className="font-bold text-[1.25rem] xl:text-[1.5rem]">VISA delivery via mail</span> </h1>
          <p className="text-[#5C5F5F] text-[0.875rem] lg:text-[1rem]">Get your approved E-VISA delivered to your registered email id to download.</p>
        </div>

        <div className="bg-[#FFFBFF] p-4 rounded-[1.25rem] border-solid border-[0.5px] border-visaGrey">
          <h1 className="flex items-start gap-3 text-[1rem] lg:text-[1.25rem]  mb-2">
            <svg className='shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 1.99805C17.524 1.99805 22.002 6.47605 22.002 12C22.002 17.523 17.524 22 12 22C6.476 22.001 2 17.523 2 12C1.999 6.47605 6.476 1.99805 12 1.99805ZM12 3.49805C10.8758 3.48585 9.76036 3.69675 8.71822 4.11852C7.67607 4.54029 6.72793 5.16457 5.92866 5.95521C5.12939 6.74586 4.49487 7.68718 4.06182 8.72469C3.62877 9.7622 3.4058 10.8753 3.4058 11.9995C3.4058 13.1238 3.62877 14.2369 4.06182 15.2744C4.49487 16.3119 5.12939 17.2532 5.92866 18.0439C6.72793 18.8345 7.67607 19.4588 8.71822 19.8806C9.76036 20.3023 10.8758 20.5132 12 20.501C14.2388 20.4768 16.3776 19.5704 17.9521 17.9787C19.5267 16.387 20.4098 14.2384 20.4098 11.9995C20.4098 9.76065 19.5267 7.61211 17.9521 6.02041C16.3776 4.42871 14.2388 3.52233 12 3.49805ZM11.996 10.498C12.1774 10.4978 12.3528 10.5633 12.4896 10.6825C12.6264 10.8016 12.7153 10.9663 12.74 11.146L12.747 11.248L12.751 16.75C12.7529 16.9414 12.6817 17.1263 12.5517 17.2668C12.4218 17.4074 12.2431 17.4929 12.0521 17.5059C11.8612 17.519 11.6725 17.4585 11.5247 17.337C11.3768 17.2154 11.2811 17.0419 11.257 16.852L11.251 16.751L11.247 11.249C11.247 11.0501 11.326 10.8594 11.4667 10.7187C11.6073 10.5781 11.7981 10.499 11.997 10.499L11.996 10.498ZM12.001 7.00105C12.1348 6.99681 12.2681 7.01951 12.3929 7.06778C12.5177 7.11605 12.6316 7.18892 12.7277 7.28206C12.8239 7.3752 12.9003 7.4867 12.9525 7.60996C13.0047 7.73321 13.0316 7.8657 13.0316 7.99955C13.0316 8.1334 13.0047 8.26588 12.9525 8.38914C12.9003 8.51239 12.8239 8.62389 12.7277 8.71703C12.6316 8.81017 12.5177 8.88304 12.3929 8.93131C12.2681 8.97959 12.1348 9.00228 12.001 8.99805C11.7417 8.98984 11.4957 8.88104 11.3151 8.69468C11.1346 8.50832 11.0336 8.25903 11.0336 7.99955C11.0336 7.74007 11.1346 7.49077 11.3151 7.30441C11.4957 7.11805 11.7417 7.00926 12.001 7.00105Z" fill="#222222" />
            </svg>
            <span className='mt-[-2px]'>E-VISA gets approved post all the documents are processed sucessfully</span>


          </h1>

          <p className="text-[#5C5F5F] ml-8 text-[0.875rem]">DFFFFFFFFFFF</p>
        </div>

      </aside>


      <section className="w-[1px] justify-self-center bg-[#222222] relative rounded-md flex flex-col items-center justify-between h-[82%]">
        <label className="w-full h-[50%]  bg-visaBlue absolute rounded-md"></label>
        <span className="w-10 h-10 bg-visaBlue rounded-[50%] "></span>
        <span className="w-10 h-10 border-solid border-[0.5px] border-[#7A757F] bg-white z-[1] rounded-[50%] flex items-center justify-center font-semibold"><span>2</span></span>
        <span className="w-10 h-10 border-solid border-[0.5px] border-[#7A757F] bg-white z-[1] rounded-[50%] flex items-center justify-center font-semibold"><span>3</span></span>
      </section>


      <aside className="flex flex-col gap-8">

        <div className="flex items-center justify-center">
          <img src="/img/landing/womantravel.png" className="w-[80%]" />
        </div>


        <div className="flex flex-col gap-4">
          <h1 className="text-[#222222] flex gap-2 items-end text-[1rem] xl:text-[1.25rem] font-semibold flex-wrap">Step 2:<span className="font-bold text-[1.25rem] xl:text-[1.5rem] ">Upload documents and pay online</span> </h1>
          <p className="text-[#5C5F5F] text-[0.875rem] lg:text-[1rem]">Upload traveler’s scanned documents for verification and pay the required amount online to start your VISA processing</p>
        </div>

        <div className="bg-[#FFFBFF] p-4 rounded-[1.25rem] border-solid border-[0.5px] border-visaGrey">
          <h1 className="flex items-start gap-3 text-[1rem] lg:text-[1.25rem]  mb-2">
            <svg className='shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 1.99805C17.524 1.99805 22.002 6.47605 22.002 12C22.002 17.523 17.524 22 12 22C6.476 22.001 2 17.523 2 12C1.999 6.47605 6.476 1.99805 12 1.99805ZM12 3.49805C10.8758 3.48585 9.76036 3.69675 8.71822 4.11852C7.67607 4.54029 6.72793 5.16457 5.92866 5.95521C5.12939 6.74586 4.49487 7.68718 4.06182 8.72469C3.62877 9.7622 3.4058 10.8753 3.4058 11.9995C3.4058 13.1238 3.62877 14.2369 4.06182 15.2744C4.49487 16.3119 5.12939 17.2532 5.92866 18.0439C6.72793 18.8345 7.67607 19.4588 8.71822 19.8806C9.76036 20.3023 10.8758 20.5132 12 20.501C14.2388 20.4768 16.3776 19.5704 17.9521 17.9787C19.5267 16.387 20.4098 14.2384 20.4098 11.9995C20.4098 9.76065 19.5267 7.61211 17.9521 6.02041C16.3776 4.42871 14.2388 3.52233 12 3.49805ZM11.996 10.498C12.1774 10.4978 12.3528 10.5633 12.4896 10.6825C12.6264 10.8016 12.7153 10.9663 12.74 11.146L12.747 11.248L12.751 16.75C12.7529 16.9414 12.6817 17.1263 12.5517 17.2668C12.4218 17.4074 12.2431 17.4929 12.0521 17.5059C11.8612 17.519 11.6725 17.4585 11.5247 17.337C11.3768 17.2154 11.2811 17.0419 11.257 16.852L11.251 16.751L11.247 11.249C11.247 11.0501 11.326 10.8594 11.4667 10.7187C11.6073 10.5781 11.7981 10.499 11.997 10.499L11.996 10.498ZM12.001 7.00105C12.1348 6.99681 12.2681 7.01951 12.3929 7.06778C12.5177 7.11605 12.6316 7.18892 12.7277 7.28206C12.8239 7.3752 12.9003 7.4867 12.9525 7.60996C13.0047 7.73321 13.0316 7.8657 13.0316 7.99955C13.0316 8.1334 13.0047 8.26588 12.9525 8.38914C12.9003 8.51239 12.8239 8.62389 12.7277 8.71703C12.6316 8.81017 12.5177 8.88304 12.3929 8.93131C12.2681 8.97959 12.1348 9.00228 12.001 8.99805C11.7417 8.98984 11.4957 8.88104 11.3151 8.69468C11.1346 8.50832 11.0336 8.25903 11.0336 7.99955C11.0336 7.74007 11.1346 7.49077 11.3151 7.30441C11.4957 7.11805 11.7417 7.00926 12.001 7.00105Z" fill="#222222" />
            </svg>
            <span className='mt-[-2px]'>Provide other details about your VISA requirement</span>

          </h1>

          <ul className="ml-14 flex flex-col gap-2 text-[0.875rem]">
            <li className="text-[#5C5F5F] list-disc">Number of travelers</li>
            <li className="text-[#5C5F5F] list-disc">Type of VISA</li>
            <li className="text-[#5C5F5F] list-disc">Validity of your VISA</li>
          </ul>
        </div>





        <div className="flex items-center justify-center">
          <img src="/img/landing/airtickets.png" className="w-[50%] h-full" />
        </div>

      </aside>


    </main>
  )
}

export default VisaStepsDetails


