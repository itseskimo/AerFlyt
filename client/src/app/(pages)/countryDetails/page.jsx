import React from 'react'
import Navbar from '@/components/common/Navbar/Navbar'
import Footer from '@/components/common/Footer/Footer'
import FaqsSection from '@/components/sections/Landing/FaqsSection/FaqsSection'
import Layout from '@/components/layout/layout'
import CountryBanner from '@/components/sections/Country/CountryBanner/CountryBanner/'
import CountryTitle from '@/components/sections/Country/CountryTitle/CountryTitle'
import VisaProvidersComparison from '@/components/sections/Country/VisaProvidersComparison/VisaProvidersComparison'
import CountryVisaSteps from '@/components/sections/Country/CountryVisaSteps/CountryVisaSteps'
import DocsRequired from '@/components/sections/Country/DocsRequired/DocsRequired'
import CountryHeader from '@/components/sections/Country/CountryHeader/CountryHeader'

const page = () => {

  return (
    <>
      <Navbar headerShow={false} />
      <CountryBanner />

      <Layout>

        <main className='grid grid-cols-1 lg:grid-cols-[auto,450px] gap-20'>

          <aside className=' flex flex-col gap-6 mt-[-60px] order-2 lg:order-1'>
            <CountryHeader />
            <CountryTitle />
            <VisaProvidersComparison />
            <CountryVisaSteps />
            <DocsRequired />
          </aside>

          <aside className='shadow-navshadow order-1 lg:order-2 bg-white  h-max  rounded-[1.5rem] flex flex-col gap-6  lg:sticky top-14 p-5 lg:mt-[-250px] '>

            <main className='rounded-[1.5rem]  overflow-hidden shadow-paymentShadow border-[2px] border-solid border-visaBlue'>

              <section className='grid grid-cols-2 bg-visaBlue text-white py-3 px-4 '>
                <span className='text-[1.5rem] font-bold text-left'>30 Days</span>

                <span className='text-[1.5rem] font-bold justify-self-end flex items-center gap-2'>4,000
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clipPath="url(#clip0_2105_6164)">
                      <path d="M9.99935 18.3337C14.6017 18.3337 18.3327 14.6027 18.3327 10.0003C18.3327 5.39795 14.6017 1.66699 9.99935 1.66699C5.39698 1.66699 1.66602 5.39795 1.66602 10.0003C1.66602 14.6027 5.39698 18.3337 9.99935 18.3337Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 13.3337V10.0003M10 6.66699H10.0083" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2105_6164">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                <span className='text-[0.875rem] text-left'>Single Entry</span>
                <span className='text-[0.875rem] justify-self-end whitespace-nowrap'>(includes all govt. related fees)</span>

              </section>


              <section className='grid grid-cols-2 gap-4 p-4'>

                {/* <span className='flex items-center gap-2 justify-self-start text-[#5C5F5F]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M20.1667 5C22.9956 5 25.7088 6.12381 27.7091 8.12419C29.7095 10.1246 30.8333 12.8377 30.8333 15.6667C30.8333 18.4956 29.7095 21.2088 27.7091 23.2091C25.7088 25.2095 22.9956 26.3333 20.1667 26.3333C17.3377 26.3333 14.6246 25.2095 12.6242 23.2091C10.6238 21.2088 9.5 18.4956 9.5 15.6667C9.5 12.8377 10.6238 10.1246 12.6242 8.12419C14.6246 6.12381 17.3377 5 20.1667 5ZM20.1667 7.66667C18.0449 7.66667 16.0101 8.50952 14.5098 10.0098C13.0095 11.5101 12.1667 13.5449 12.1667 15.6667C12.1667 17.7884 13.0095 19.8232 14.5098 21.3235C16.0101 22.8238 18.0449 23.6667 20.1667 23.6667C22.2884 23.6667 24.3232 22.8238 25.8235 21.3235C27.3238 19.8232 28.1667 17.7884 28.1667 15.6667C28.1667 13.5449 27.3238 11.5101 25.8235 10.0098C24.3232 8.50952 22.2884 7.66667 20.1667 7.66667ZM18.8333 10.3333H20.8333V15.3733L23.94 18.48L22.5267 19.8933L18.8333 16.2V10.3333ZM2.83333 23.6667C2.47971 23.6667 2.14057 23.5262 1.89052 23.2761C1.64048 23.0261 1.5 22.687 1.5 22.3333C1.5 21.9797 1.64048 21.6406 1.89052 21.3905C2.14057 21.1405 2.47971 21 2.83333 21H7.94C8.35333 21.9467 8.88667 22.84 9.5 23.6667H2.83333ZM4.16667 17C3.81304 17 3.47391 16.8595 3.22386 16.6095C2.97381 16.3594 2.83333 16.0203 2.83333 15.6667C2.83333 15.313 2.97381 14.9739 3.22386 14.7239C3.47391 14.4738 3.81304 14.3333 4.16667 14.3333H6.9L6.83333 15.6667L6.9 17H4.16667ZM5.5 10.3333C5.14638 10.3333 4.80724 10.1929 4.55719 9.94281C4.30714 9.69276 4.16667 9.35362 4.16667 9C4.16667 8.64638 4.30714 8.30724 4.55719 8.05719C4.80724 7.80714 5.14638 7.66667 5.5 7.66667H9.5C8.88667 8.49333 8.35333 9.38667 7.94 10.3333H5.5Z" fill="#222222" />
                  </svg>
                  VISA type</span>
                <span className='text-[1.25rem] font-bold justify-self-end'>E-VISA</span> */}

                <span className='flex items-center gap-2 justify-self-start text-[#5C5F5F]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M20.1667 5C22.9956 5 25.7088 6.12381 27.7091 8.12419C29.7095 10.1246 30.8333 12.8377 30.8333 15.6667C30.8333 18.4956 29.7095 21.2088 27.7091 23.2091C25.7088 25.2095 22.9956 26.3333 20.1667 26.3333C17.3377 26.3333 14.6246 25.2095 12.6242 23.2091C10.6238 21.2088 9.5 18.4956 9.5 15.6667C9.5 12.8377 10.6238 10.1246 12.6242 8.12419C14.6246 6.12381 17.3377 5 20.1667 5ZM20.1667 7.66667C18.0449 7.66667 16.0101 8.50952 14.5098 10.0098C13.0095 11.5101 12.1667 13.5449 12.1667 15.6667C12.1667 17.7884 13.0095 19.8232 14.5098 21.3235C16.0101 22.8238 18.0449 23.6667 20.1667 23.6667C22.2884 23.6667 24.3232 22.8238 25.8235 21.3235C27.3238 19.8232 28.1667 17.7884 28.1667 15.6667C28.1667 13.5449 27.3238 11.5101 25.8235 10.0098C24.3232 8.50952 22.2884 7.66667 20.1667 7.66667ZM18.8333 10.3333H20.8333V15.3733L23.94 18.48L22.5267 19.8933L18.8333 16.2V10.3333ZM2.83333 23.6667C2.47971 23.6667 2.14057 23.5262 1.89052 23.2761C1.64048 23.0261 1.5 22.687 1.5 22.3333C1.5 21.9797 1.64048 21.6406 1.89052 21.3905C2.14057 21.1405 2.47971 21 2.83333 21H7.94C8.35333 21.9467 8.88667 22.84 9.5 23.6667H2.83333ZM4.16667 17C3.81304 17 3.47391 16.8595 3.22386 16.6095C2.97381 16.3594 2.83333 16.0203 2.83333 15.6667C2.83333 15.313 2.97381 14.9739 3.22386 14.7239C3.47391 14.4738 3.81304 14.3333 4.16667 14.3333H6.9L6.83333 15.6667L6.9 17H4.16667ZM5.5 10.3333C5.14638 10.3333 4.80724 10.1929 4.55719 9.94281C4.30714 9.69276 4.16667 9.35362 4.16667 9C4.16667 8.64638 4.30714 8.30724 4.55719 8.05719C4.80724 7.80714 5.14638 7.66667 5.5 7.66667H9.5C8.88667 8.49333 8.35333 9.38667 7.94 10.3333H5.5Z" fill="#222222" />
                  </svg>
                  Validity</span>
                <span className='text-[1.25rem] font-bold justify-self-end'>60 days</span>



                <span className='flex items-center gap-2 justify-self-start text-[#5C5F5F]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M11.1667 18.667C10.7889 18.667 10.472 18.539 10.216 18.283C9.96 18.027 9.83245 17.7106 9.83334 17.3337C9.83334 16.9559 9.96134 16.639 10.2173 16.383C10.4733 16.127 10.7898 15.9994 11.1667 16.0003C11.5444 16.0003 11.8613 16.1283 12.1173 16.3843C12.3733 16.6403 12.5009 16.9568 12.5 17.3337C12.5 17.7114 12.372 18.0283 12.116 18.2843C11.86 18.5403 11.5436 18.6679 11.1667 18.667ZM16.5 18.667C16.1222 18.667 15.8053 18.539 15.5493 18.283C15.2933 18.027 15.1658 17.7106 15.1667 17.3337C15.1667 16.9559 15.2947 16.639 15.5507 16.383C15.8067 16.127 16.1231 15.9994 16.5 16.0003C16.8778 16.0003 17.1947 16.1283 17.4507 16.3843C17.7067 16.6403 17.8342 16.9568 17.8333 17.3337C17.8333 17.7114 17.7053 18.0283 17.4493 18.2843C17.1933 18.5403 16.8769 18.6679 16.5 18.667ZM21.8333 18.667C21.4556 18.667 21.1387 18.539 20.8827 18.283C20.6267 18.027 20.4991 17.7106 20.5 17.3337C20.5 16.9559 20.628 16.639 20.884 16.383C21.14 16.127 21.4564 15.9994 21.8333 16.0003C22.2111 16.0003 22.528 16.1283 22.784 16.3843C23.04 16.6403 23.1676 16.9568 23.1667 17.3337C23.1667 17.7114 23.0387 18.0283 22.7827 18.2843C22.5267 18.5403 22.2102 18.6679 21.8333 18.667ZM7.16667 29.3337C6.43334 29.3337 5.80534 29.0723 5.28267 28.5497C4.76 28.027 4.49911 27.3994 4.5 26.667V8.00033C4.5 7.267 4.76134 6.639 5.284 6.11633C5.80667 5.59366 6.43422 5.33277 7.16667 5.33366H8.5V4.00033C8.5 3.62255 8.628 3.30566 8.884 3.04966C9.14 2.79366 9.45645 2.66611 9.83334 2.667C10.2111 2.667 10.528 2.795 10.784 3.051C11.04 3.307 11.1676 3.62344 11.1667 4.00033V5.33366H21.8333V4.00033C21.8333 3.62255 21.9613 3.30566 22.2173 3.04966C22.4733 2.79366 22.7898 2.66611 23.1667 2.667C23.5444 2.667 23.8613 2.795 24.1173 3.051C24.3733 3.307 24.5009 3.62344 24.5 4.00033V5.33366H25.8333C26.5667 5.33366 27.1947 5.595 27.7173 6.11766C28.24 6.64033 28.5009 7.26789 28.5 8.00033V26.667C28.5 27.4003 28.2387 28.0283 27.716 28.551C27.1933 29.0737 26.5658 29.3346 25.8333 29.3337H7.16667ZM7.16667 26.667H25.8333V13.3337H7.16667V26.667Z" fill="#222222" />
                  </svg>
                  Length of stay</span>
                <span className='text-[1.25rem] font-bold justify-self-end'>30 days</span>


                <span className='flex items-center gap-2 justify-self-start text-[#5C5F5F] whitespace-nowrap'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M12.4993 18.3337C9.37935 18.3337 3.16602 19.8937 3.16602 23.0003V25.3337H21.8327V23.0003C21.8327 19.8937 15.6193 18.3337 12.4993 18.3337ZM6.28602 22.667C7.40602 21.8937 10.1127 21.0003 12.4993 21.0003C14.886 21.0003 17.5927 21.8937 18.7127 22.667H6.28602ZM12.4993 16.0003C15.0727 16.0003 17.166 13.907 17.166 11.3337C17.166 8.76033 15.0727 6.66699 12.4993 6.66699C9.92602 6.66699 7.83268 8.76033 7.83268 11.3337C7.83268 13.907 9.92602 16.0003 12.4993 16.0003ZM12.4993 9.33366C13.606 9.33366 14.4993 10.227 14.4993 11.3337C14.4993 12.4403 13.606 13.3337 12.4993 13.3337C11.3927 13.3337 10.4993 12.4403 10.4993 11.3337C10.4993 10.227 11.3927 9.33366 12.4993 9.33366ZM21.886 18.4137C23.4327 19.5337 24.4993 21.027 24.4993 23.0003V25.3337H29.8327V23.0003C29.8327 20.307 25.166 18.7737 21.886 18.4137ZM20.4993 16.0003C23.0727 16.0003 25.166 13.907 25.166 11.3337C25.166 8.76033 23.0727 6.66699 20.4993 6.66699C19.7793 6.66699 19.1127 6.84033 18.4993 7.13366C19.3393 8.32033 19.8327 9.77366 19.8327 11.3337C19.8327 12.8937 19.3393 14.347 18.4993 15.5337C19.1127 15.827 19.7793 16.0003 20.4993 16.0003Z" fill="#222222" />
                  </svg>
                  Number of travellers</span>

                <div className='text-[1.25rem] flex items-center gap-1 font-bold justify-self-end'>
                  <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M15.4993 10.8337H5.49935C5.04102 10.8337 4.66602 10.4587 4.66602 10.0003C4.66602 9.54199 5.04102 9.16699 5.49935 9.16699H15.4993C15.9577 9.16699 16.3327 9.54199 16.3327 10.0003C16.3327 10.4587 15.9577 10.8337 15.4993 10.8337Z" fill="black" />
                  </svg>
                  <span>1</span>
                  <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path d="M15.832 21.334C15.832 21.7022 16.1305 22.0006 16.4987 22.0006V22.0006C16.8669 22.0006 17.1654 21.7022 17.1654 21.334V19.334C17.1654 17.8612 18.3593 16.6673 19.832 16.6673H21.832C22.2002 16.6673 22.4987 16.3688 22.4987 16.0006V16.0006C22.4987 15.6325 22.2002 15.334 21.832 15.334H19.832C18.3593 15.334 17.1654 14.1401 17.1654 12.6673V10.6673C17.1654 10.2991 16.8669 10.0007 16.4987 10.0007V10.0007C16.1305 10.0007 15.832 10.2991 15.832 10.6673V12.6673C15.832 14.1401 14.6381 15.334 13.1654 15.334H11.1654C10.7972 15.334 10.4987 15.6325 10.4987 16.0006V16.0006C10.4987 16.3688 10.7972 16.6673 11.1654 16.6673H13.1654C14.6381 16.6673 15.832 17.8612 15.832 19.334V21.334ZM7.98536 26.6673C7.37203 26.6673 6.86003 26.462 6.44936 26.0513C6.03781 25.6398 5.83203 25.1273 5.83203 24.514V7.48732C5.83203 6.87398 6.03781 6.36198 6.44936 5.95132C6.86003 5.53976 7.37203 5.33398 7.98536 5.33398H25.012C25.6254 5.33398 26.1374 5.53976 26.548 5.95132C26.9596 6.36198 27.1654 6.87398 27.1654 7.48732V24.514C27.1654 25.1273 26.96 25.6393 26.5494 26.05C26.1378 26.4615 25.6254 26.6673 25.012 26.6673H7.98536Z" fill="#7214FF" />
                  </svg>
                </div>
              </section>

            </main>

            <section className='grid grid-cols-2  shadow-paymentSubmitShadow text-black p-4 border-[2px] border-solid border-[#7A757F] rounded-[1.5rem]'>
              <span className='text-[1.5rem] font-bold text-left'>30 Days</span>

              <span className='text-[1.5rem] font-bold justify-self-end flex items-center gap-2'>4,000
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_2105_6177)">
                    <path d="M9.99935 18.3337C14.6017 18.3337 18.3327 14.6027 18.3327 10.0003C18.3327 5.39795 14.6017 1.66699 9.99935 1.66699C5.39698 1.66699 1.66602 5.39795 1.66602 10.0003C1.66602 14.6027 5.39698 18.3337 9.99935 18.3337Z" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 13.3337V10.0003M10 6.66699H10.0083" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2105_6177">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span className='text-[0.875rem] text-left'>Single Entry</span>
              <span className='text-[0.875rem] justify-self-end whitespace-nowrap '>(includes all govt. related fees)</span>

            </section>
            <button className='py-[0.75rem] px-[4.5rem]  bg-[#FFA500] text-[1.5rem] font-bold rounded-[2rem] shadow-paymentSubmitShadow'>Apply for E-Visa</button>
          </aside>


        </main>

        <FaqsSection />
      </Layout>
      <Footer />
    </>
  )
}

export default page