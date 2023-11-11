'use client'
import Header from "@/components/common/Header/Header"
import ContinentSelector from "@/components/sections/Landing/ContinentSelector/ContinentSelector"
import HeroSection from "@/components/sections/Landing/HeroSection/HeroSection"
import Footer from '@/components/common/Footer/Footer'
import VisaStepsHeader from '@/components/sections/Landing/VisaSteps/VisaStepsHeader'
import VisaStepsDetails from "@/components/sections/Landing/VisaSteps/VisaStepsDetails"
import CountryCard from '@/components/cards/CountryCard/CountryCard'


import React, { useState, useEffect, useRef } from 'react';

interface FAQItemProps {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  toggleFAQ: (id: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ id, question, answer, isOpen, toggleFAQ }) => {
  return (
    <div onClick={() => toggleFAQ(id)} className='relative w-full p-[1rem] border-[1px] border-solid border-transparent border-b-slate-300	cursor-pointer transition-all	duration-500 ease-in'>

      <div className="flex items-center justify-between ">
        <h6 className='text-[1.25rem] font-semibold'>{question}</h6>

        <svg className={`${isOpen && 'rotate-180'} mr-4 transition-all duration-300`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5555 4.77778L7.99999 10.9691L1.44443 4.77778" stroke="#6B7684" strokeWidth="1.22222" className="select-none pointer-events-none transition-all ease-in"
          />
        </svg>
      </div>

      <div className={`${isOpen ? 'max-h-[300px]' : 'max-h-0'} overflow-hidden transition-all duration-500	 ease-in`} >
        <p className=' mt-2 '>{answer}</p>
      </div>

    </div>
  );
};

const FAQList: React.FC = () => {
  const faqData = [
    {
      id: 1,
      question: 'What does Aerviz do?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      question: 'How many countries VISA services can be availed via Aerviz?',
      answer: 'You can install React using npm or yarn.',
    },
    {
      id: 3,
      question: 'Once I applied for the VISA, what is the process followed by the company?',
      answer: 'You can install React using npm or yarn.',
    },

  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ((prevOpenFAQ) => (prevOpenFAQ === id ? null : id));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpenFAQ(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="faq-list" ref={ref}>
      {faqData.map((faq) => (
        <FAQItem
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={faq.answer}
          isOpen={openFAQ === faq.id}
          toggleFAQ={toggleFAQ}
        />
      ))}
    </div>
  );
};







const Home = () => {
  const country = [{ image: "/img/dubai.avif" }, { image: "/img/australia.avif" }, { image: "/img/egypt.avif" }, { image: "/img/thailand.avif" }, { image: "/img/country.png" }, { image: "/img/myanmar.png" }, { image: "/img/srilanka.png" }];

  return (
    <>
      <Header />
      <HeroSection />
      <ContinentSelector />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 sm:gap-8 mx-8">
        {country.map((item, idx) => (
          <CountryCard key={idx} {...item} />
        ))}
      </div>
      <VisaStepsHeader />
      <VisaStepsDetails />
      <div className="bg-[#7214ff0d] h-28 flex items-center justify-center font-bold text-[1.5rem]">
        <h1>Relax and start planning your trip 🎉</h1>
      </div>
      <Footer />




      <main>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[1.5rem]">FAQS</h1>
          <h2 className="text-[#5C5F5F]">Frequently asked questions</h2>
        </div>
      </main>



      <FAQList />




    </>
  );
};

export default Home;
