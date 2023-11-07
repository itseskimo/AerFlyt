import React from 'react'

const ContinentSelector = () => {
    return (
        <div className="relative bg-visaBlue h-[8.875rem]">


            <section className="absolute top-[90%] bg-visaBlue p-6 left-[50%] w-[80%] rounded-[1.25rem]  -translate-y-[50%] -translate-x-[50%]">
                <div className=" bg-white  rounded-[1.25rem] flex items-center justify-between  p-6">

                    {
                        [0, 1, 2, 3, 4].map((item) => (
                            <div key={item} className="flex flex-col items-center justify-center">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect width="40" height="40" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_1266_3268" transform="scale(0.015625)" />
                                        </pattern>
                                        <image id="image0_1266_3268" width="64" height="64" xlinkHref="data:image/png;base64,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" />
                                    </defs>
                                </svg>
                                <h1 className="text-[1.25rem] font-semibold">Australia</h1>
                            </div>

                        ))
                    }
                </div>
            </section>


        </div>

    )
}

export default ContinentSelector