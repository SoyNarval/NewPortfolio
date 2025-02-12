import React from 'react'
import { useLanguages } from '../context/Languages'

export default function Capacities() {

  const { selectedLanguageData } = useLanguages();
  const { capacities } = selectedLanguageData;

  return (
    <div className='flex flex-col w-full h-screen items-center gap-4 p-8 !z-0'>
      <h1 className='text-4xl font-bold'>{capacities.title}</h1>
      <div className='grid grid-cols-2 gap-4 justify-center items-center h-full w-full max-lg:grid-cols-1'>

        <div className='flex flex-col gap-4 items-center'>
          <h1 className='text-2xl font-bold'>{capacities.tecnologies}</h1>
          <div data-aos="fade-right" className='grid grid-cols-2 gap-4 !z-0'>
            <h2 className='flex p-6 border border-slate-400 justify-center'>React</h2>
            <h2 className='flex p-6 border border-slate-400 justify-center'>Sass</h2>
            <h2 className='flex p-6 border border-slate-400 justify-center'>Tailwind</h2>
            <h2 className='flex p-6 border border-slate-400 justify-center'>SQL</h2>
            <h2 className='flex p-6 border border-slate-400 justify-center'>PHP</h2>
            <h2 className='flex p-6 border border-slate-400 justify-center'>Java</h2>
            <h2 className='flex p-6 border border-slate-400 justify-center'>C++</h2>
          </div>
        </div>

        <div className='flex flex-col gap-4 items-center'>
          <h1 className='text-2xl font-bold'>{capacities.languages}</h1>
          <div data-aos="fade-left" className='flex flex-col gap-4 !z-0'>
            <h2 className='p-6 border border-slate-400'>{capacities.en}</h2>
            <h2 className='p-6 border border-slate-400'>{capacities.es}</h2>
            <h2 className='p-6 border border-slate-400'>{capacities.cz}</h2>
          </div>
        </div>

      </div>
    </div>

  )
}
