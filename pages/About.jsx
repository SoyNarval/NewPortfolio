"use client"
import React from 'react'
import { useLanguages } from '../context/Languages'

export default function About() {

    const { selectedLanguageData, error } = useLanguages();
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!selectedLanguageData) {
        return <div>Cargando...</div>; 
    }

    const { aboutMe = {}, contact = {} } = selectedLanguageData;


    return (
        <div className='flex flex-col w-full items-center p-8 gap-2'>
            <h1 className='text-4xl font-bold'>{aboutMe.title}</h1>
            <div className='grid grid-cols-2 w-full h-screen items-center max-lg:grid-cols-1 max-lg:justify-between md:scroll-smooth'>
                <div className='w-full flex flex-col gap-4 max-lg:w-full'>
                    <div className='flex flex-col gap-4 w-full h-full items-center justify-center '>
                        <p>{aboutMe.intro}</p>
                        <h1 className='text-6xl font-bold'>Ignacio Pelayo</h1>
                        <p>{aboutMe.description}</p>
                    </div>
                </div>
                <div className='flex flex-col w-full h-2/3 gap-4 border border-slate-400  justify-center items-center p-4'>
                    <h2 className='text-xl font-bold'>{contact.contact}</h2>
                    <div className='grid grid-cols-2 gap-2 w-full h-full justify-around items-center max-md:grid-cols-1'>
                        <a className='flex items-center justify-center text-lg ' href="mailto:ignaciopelayo@hotmail.es">ignaciopelayo@hotmail.es</a>
                        <a className='flex items-center justify-center' href='https://www.linkedin.com/in/ignacio-pelayo-moret-a2a817192/' target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width='3rem' height='3rem'><path fill="currentColor" d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M6 13H4V6h2zM5 5a1 1 0 1 1 0-2a1 1 0 1 1 0 2m8 8h-2V9a1 1 0 1 0-2 0v4H7V6h2v1.241C9.412 6.675 10.044 6 10.75 6C11.994 6 13 7.119 13 8.5z"/></svg>
                        </a>
                        <a className='flex items-center justify-center' href='https://github.com/SoyNarval' target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='3rem' height='3rem'><path fill="currentColor" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.6 17.6 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.6 18.6 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.2 208.2 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.6 18.6 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.4 19.4 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32"/></svg>
                        </a>
                        <a className='flex items-center justify-center text-lg' download={"Curriculum-Ignacio-Pelayo"} href='/cv.pdf'>{aboutMe.cv} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"/></svg></a>
                    </div>
                </div>
                
            </div>
        </div>

    )
}
