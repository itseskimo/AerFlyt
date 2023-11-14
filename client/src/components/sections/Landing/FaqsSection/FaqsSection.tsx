'use client'
import FAQList from "@/components/common/Faq/Faq"

import React from 'react'

const FaqsSection = () => {
    return (
        <main className="py-24">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[1rem] md:text-[1.5rem]">FAQS</h1>
                <h2 className="text-[#5C5F5F] text-[0.875rem] md:text-[1rem]">Frequently asked questions</h2>
            </div>
            <FAQList />
        </main>
    )
}

export default FaqsSection

