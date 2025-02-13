"use client";
import Head from "next/head";
import Nav from "../../components/Nav";
import About from "../../pages/About";
import Capacities from "../../pages/Capacities";
import Projects from "../../pages/Projects";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useRef } from "react";

export default function Home() {

  const refAbout = useRef(null);
  const refCap = useRef(null);
  const refProj = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <>
      <div className="flex h-full w-screen relative">
        <div className="h-full w-1/5 sticky top-0 left-0 z-50">
          <Nav
            refAbout={refAbout}
            refCap={refCap}
            refProj={refProj}
          />
        </div>

        <div className="flex flex-col w-4/5 max-md:w-screen">
          <div ref={refAbout} className="h-screen w-full max-md:w-screen">
            <About/>
          </div>

          <div ref={refCap} className="h-screen w-full max-md:w-screen">
            <Capacities/>
          </div>

          <div ref={refProj} className="h-screen w-full max-md:w-screen">
            <Projects/>
          </div>
        </div>
      </div>
    </>
  )
}
