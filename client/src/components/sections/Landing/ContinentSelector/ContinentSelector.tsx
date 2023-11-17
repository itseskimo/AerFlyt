import React from 'react'

const ContinentSelector = () => {
    const continentIMGS = [
        {
            name: 'Asia',
            location: './img/continents/asia.png',
        },
        {
            name: 'Africa',
            location: './img/continents/africa.png',
        },
        {
            name: 'Europe',
            location: './img/continents/europe.png',
        },
        {
            name: 'Australia',
            location: './img/continents/australia.png',
        },
    ]
    return (
        <div className="relative bg-visaBlue h-[8.875rem] mb-24">


            <section className="absolute top-[90%] bg-visaBlue p-6 left-[50%] w-[calc(100%-2rem)]  rounded-[1.25rem]  -translate-y-[50%] -translate-x-[50%]">
                <div className=" bg-white  rounded-[1.25rem] flex items-center justify-between  p-6">


                    {
                        continentIMGS.map((item,idx) => (
                            <section key={idx} className="flex flex-col items-center justify-center">
                                <img src={item.location} className='h-10 w-10' />
                                <h1 className="text-[1.25rem] font-semibold">{item.name}</h1>
                            </section>
                        ))
                    }




                    <section className="flex flex-col items-center justify-center">
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
                    </section>


                </div>
            </section>


        </div>

    )
}

export default ContinentSelector