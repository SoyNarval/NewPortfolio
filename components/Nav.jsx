"use client"
import React, { useState, useEffect } from 'react'
import { useLanguages } from '../context/Languages'
import ThemeToggleButton from './ThemeToggleButton';
import NavThoggleButton from './NavThoggleButton';

export default function Nav({ refAbout, refCap, refProj }) {

  const { selectedLanguageData, toggleLanguage, language } = useLanguages();
  const { nav } = selectedLanguageData;

  const [ isOpen, setIsOpen ] = useState(false)

  const scrollTo = (ref) => {
    if(ref && ref.current){
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      setIsOpen(false);
    }
  }

  useEffect(() => {
    const handleScroll = (e) => {
      if (isOpen) {
        e.preventDefault();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", handleScroll, { passive: false });
      document.addEventListener("wheel", handleScroll, { passive: false });
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", handleScroll);
      document.removeEventListener("wheel", handleScroll);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", handleScroll);
      document.removeEventListener("wheel", handleScroll);
    };
  }, [isOpen]);

  return (
    <>
      <div className={`absolute top-0 left-0 z-50 md:hidden bg-transparent`}>
        <NavThoggleButton
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
      <div 
        className={`flex flex-col items-center justify-between h-dvh p-4 w-full sticky top-0 max-md:w-screen max-md:absolute
        ${isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'} transition-transform duration-300 ease-in-out bg-background `}
      >
        <div className='flex flex-col text-center items-center justify-center gap-2'>
            <h1 className='text-xl font-bold'>Ignacio Pelayo</h1>
            <h2 className='text-lg'>{nav.description}</h2>
        </div>
        <button className='border-b border-slate-400 p-4 rounded-full hover:bg-[var(--buttonhover)] shadow-xl w-full ' onClick={() => scrollTo(refAbout)}>{nav.about}</button>
        <button className='border-b border-slate-400 p-4 rounded-full hover:bg-[var(--buttonhover)] shadow-xl w-full ' onClick={() => scrollTo(refCap)}>{nav.capacities}</button>
        <button className='border-b border-slate-400 p-4 rounded-full hover:bg-[var(--buttonhover)] shadow-xl w-full ' onClick={() => scrollTo(refProj)}>{nav.projects}</button>
        <div className='flex flex-wrap w-full justify-around'>
            <a className='border-b border-slate-400 p-4 rounded-full hover:bg-[var(--buttonhover)] shadow-xl flex items-center justify-center ' href='https://www.linkedin.com/in/ignacio-pelayo-moret-a2a817192/' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" width='1em' height='1em'><path fill="currentColor" d="M5.706 7.798V24H.311V7.798zm.343-5.002l.002.098c0 .749-.318 1.423-.826 1.895l-.002.001A3.07 3.07 0 0 1 3 5.59h.007h-.033a2.95 2.95 0 0 1-2.162-.801l.001.001a2.67 2.67 0 0 1-.815-1.998v.004l-.001-.069c0-.762.324-1.448.841-1.929L.84.797A3.07 3.07 0 0 1 3.045.001h-.006a2.98 2.98 0 0 1 2.177.795L5.214.794a2.72 2.72 0 0 1 .835 1.964V2.8v-.002zm19.062 11.92V24h-5.378v-8.665a4.7 4.7 0 0 0-.675-2.71l.012.021a2.33 2.33 0 0 0-2.076-.972h.008a2.63 2.63 0 0 0-1.73.568l.006-.004a3.5 3.5 0 0 0-1.032 1.375l-.008.023a3.9 3.9 0 0 0-.179 1.331v-.007v9.042H8.681q.033-6.523.033-10.578t-.016-4.839L8.682 7.8h5.378v2.354h-.033c.214-.345.435-.644.678-.924l-.008.009q.421-.463.908-.838l.016-.012a4.2 4.2 0 0 1 1.392-.704l.03-.007a6.4 6.4 0 0 1 1.797-.254h.079h-.004a5.8 5.8 0 0 1 4.493 1.851l.003.004q1.702 1.856 1.702 5.436z"/></svg>
            </a>
            
            <a className='border-b border-slate-400 p-4 rounded-full hover:bg-[var(--buttonhover)] shadow-xl flex items-center justify-center ' href='https://github.com/SoyNarval' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width='1em' height='1em'><path fill="currentColor" d="M9.358 2.145a8.2 8.2 0 0 0-3.716 0c-.706-.433-1.245-.632-1.637-.716a2.2 2.2 0 0 0-.51-.053a1.3 1.3 0 0 0-.232.028l-.01.002l-.004.002h-.003l.137.481l-.137-.48a.5.5 0 0 0-.32.276a3.12 3.12 0 0 0-.159 2.101A3.35 3.35 0 0 0 2 5.93c0 1.553.458 2.597 1.239 3.268c.547.47 1.211.72 1.877.863a2.3 2.3 0 0 0-.116.958v.598c-.407.085-.689.058-.89-.008c-.251-.083-.444-.25-.629-.49a5 5 0 0 1-.27-.402l-.057-.093a9 9 0 0 0-.224-.354c-.19-.281-.472-.633-.928-.753l-.484-.127l-.254.968l.484.127c.08.02.184.095.355.346a7 7 0 0 1 .19.302l.068.11c.094.152.202.32.327.484c.253.33.598.663 1.11.832c.35.116.748.144 1.202.074V14.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.562c0-.316-.014-.605-.103-.874c.663-.14 1.322-.39 1.866-.86c.78-.676 1.237-1.73 1.237-3.292v-.001a3.35 3.35 0 0 0-.768-2.125a3.12 3.12 0 0 0-.159-2.1a.5.5 0 0 0-.319-.277l-.137.48c.137-.48.136-.48.135-.48l-.002-.001l-.004-.002l-.009-.002l-.075-.015a1 1 0 0 0-.158-.013a2.2 2.2 0 0 0-.51.053c-.391.084-.93.283-1.636.716"/></svg>
            </a>

            <button className='border-b border-slate-400 p-4 rounded-full hover:bg-[var(--buttonhover)] shadow-xl' onClick={() => toggleLanguage()}>{language === "es" ? "English" : "Español"}</button>
            <ThemeToggleButton/>
        </div>
      </div>
    </>

  )
}
