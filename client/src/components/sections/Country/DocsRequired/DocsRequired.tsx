import React from 'react'
import { documents } from '@/config/docsreqjson'

const DocsRequired = () => {
    return (
        <section className='my-8 '>
            <h5 className='text-[1.5rem] font-bold pb-6'>Documents required</h5>
            <div className='grid grid-cols-2 gap-8'>
                {documents.map((doc, idx) => (
                    <div key={idx} className='shadow-docsreqShadow p-5 grid grid-cols-[70px,auto] gap-4 items-center'>

                        <ul className='bg-[#F6EDFF] h-[70px] rounded-[50%] flex items-center justify-center'>
                            <li className='justify-self-center self-center' dangerouslySetInnerHTML={{ __html: doc?.image }} />
                        </ul>

                        <ul className=' '>
                            <li className='text-[1.25rem] font-semibold'>{doc.title}</li>
                            <li className='text-[0.75rem] text-[#A9ACAC]'>{doc.subtitle}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DocsRequired