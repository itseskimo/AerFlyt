import React from 'react'

const ContinentSelector = () => {
    return (
        <div className="relative bg-visaBlue h-[8.875rem] mb-24">


            <section className="absolute top-[90%] bg-visaBlue p-6 left-[50%] w-[calc(100%-2rem)]  rounded-[1.25rem]  -translate-y-[50%] -translate-x-[50%]">
                <div className=" bg-white  rounded-[1.25rem] flex items-center justify-between  p-6">


                    <section className="flex flex-col items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="40" height="40" fill="url(#pattern0)" />
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_1266_3268" transform="scale(0.015625)" />
                                </pattern>
                                <image id="image0_1266_3268" width="64" height="64" xlinkHref="data:image/png;base64,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" />
                            </defs>
                        </svg>
                        <h1 className="text-[1.25rem] font-semibold">Asia</h1>
                    </section>


                    <div className="flex flex-col items-center justify-center">

                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40px" height="40px" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd' }} xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g>
                                <path style={{ opacity: 0.936 }} fill="#30b2ea" d="M 28.5,5.5 C 28.9175,6.22158 29.5842,6.72158 30.5,7C 27.6639,8.391 25.3306,10.2243 23.5,12.5C 21.1799,10.7739 18.5133,10.1072 15.5,10.5C 15.2627,11.791 15.596,12.791 16.5,13.5C 16.44,14.0431 16.1067,14.3764 15.5,14.5C 14.7492,13.624 14.2492,12.624 14,11.5C 10.649,14.7673 6.81568,17.4339 2.5,19.5C 2.5,14.8333 2.5,10.1667 2.5,5.5C 11.1667,5.5 19.8333,5.5 28.5,5.5 Z" />
                            </g>
                            <g>
                                <path style={{ opacity: 0.969 }} fill="#22a1e3" d="M 28.5,5.5 C 31.1667,5.5 33.8333,5.5 36.5,5.5C 36.5,7.83333 36.5,10.1667 36.5,12.5C 31.443,15.1132 26.6097,18.1132 22,21.5C 21.2828,20.9558 20.7828,20.2891 20.5,19.5C 22.8504,17.7867 23.8504,15.4534 23.5,12.5C 25.3306,10.2243 27.6639,8.391 30.5,7C 29.5842,6.72158 28.9175,6.22158 28.5,5.5 Z" />
                            </g>
                            <g>
                                <path style={{ opacity: 1 }} fill="#f6fbfd" d="M 23.5,12.5 C 23.8504,15.4534 22.8504,17.7867 20.5,19.5C 19.7777,20.5511 18.7777,21.2178 17.5,21.5C 18.5,18.8333 19.5,16.1667 20.5,13.5C 19.1667,13.5 17.8333,13.5 16.5,13.5C 15.596,12.791 15.2627,11.791 15.5,10.5C 18.5133,10.1072 21.1799,10.7739 23.5,12.5 Z" />
                            </g>
                            <g>
                                <path style={{ opacity: 0.953 }} fill="#1492dd" d="M 36.5,14.5 C 36.5,20.1667 36.5,25.8333 36.5,31.5C 31.1563,31.334 25.8229,31.5006 20.5,32C 17.9614,34.3697 15.6281,36.8697 13.5,39.5C 12.5,39.5 11.5,39.5 10.5,39.5C 10.5,36.8333 10.5,34.1667 10.5,31.5C 13.3327,28.7503 16.666,27.0836 20.5,26.5C 21.3807,24.6964 22.714,23.1964 24.5,22C 28.9166,20.0669 32.9166,17.5669 36.5,14.5 Z" />
                            </g>
                            <g>
                                <path style={{ opacity: 1 }} fill="#28a9e6" d="M 16.5,13.5 C 17.8333,13.5 19.1667,13.5 20.5,13.5C 19.5,16.1667 18.5,18.8333 17.5,21.5C 16.7784,21.0825 16.2784,20.4158 16,19.5C 11.9014,23.1305 7.40139,26.1305 2.5,28.5C 2.5,25.5 2.5,22.5 2.5,19.5C 6.81568,17.4339 10.649,14.7673 14,11.5C 14.2492,12.624 14.7492,13.624 15.5,14.5C 16.1067,14.3764 16.44,14.0431 16.5,13.5 Z" />
                            </g>
                            <g>
                                <path style={{ opacity: 0.972 }} fill="#279fe1" d="M 36.5,12.5 C 36.5,13.1667 36.5,13.8333 36.5,14.5C 32.9166,17.5669 28.9166,20.0669 24.5,22C 22.714,23.1964 21.3807,24.6964 20.5,26.5C 16.666,27.0836 13.3327,28.7503 10.5,31.5C 7.83333,31.5 5.16667,31.5 2.5,31.5C 2.5,30.5 2.5,29.5 2.5,28.5C 7.40139,26.1305 11.9014,23.1305 16,19.5C 16.2784,20.4158 16.7784,21.0825 17.5,21.5C 18.7777,21.2178 19.7777,20.5511 20.5,19.5C 20.7828,20.2891 21.2828,20.9558 22,21.5C 26.6097,18.1132 31.443,15.1132 36.5,12.5 Z" />
                            </g>
                            <g>
                                <path style={{ opacity: 1 }} fill="#e8f3f9" d="M 20.5,26.5 C 19.5,26.5 18.5,26.5 17.5,26.5C 17.5,25.5 17.5,24.5 17.5,23.5C 18.5,23.5 19.5,23.5 20.5,23.5C 20.5,24.5 20.5,25.5 20.5,26.5 Z" />
                            </g>
                        </svg>

                        <h1 className="text-[1.25rem] font-semibold">Request a Country</h1>
                    </div>



                </div>
            </section>


        </div>

    )
}

export default ContinentSelector