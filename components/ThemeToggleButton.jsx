import { useState, useEffect } from "react";
import StarrySky from "./Stars";

const ThemeToggleButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const soundPath = "/sounds/click.mp3"

    const playSound = () => {
        const audio = new Audio(soundPath);
        audio.play();  // Reproduce el sonido
    };
    

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
            if (savedTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
            } else {
            const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDarkMode(prefersDarkMode);
            if (prefersDarkMode) {
                document.documentElement.classList.add("dark");
            }
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem("theme", newMode ? "dark" : "light");
        if (newMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        playSound();
    };

    return (
        <>
            <button
                onClick={() => toggleTheme()}
                className='border-b border-slate-400 p-4 rounded-full hover:bg-[var(--buttonhover)] shadow-xl transition-all duration-150'
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    >
                    <path
                        className={`${isDarkMode ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                        d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                    <path
                        className={`${isDarkMode ? "opacity-100" : "opacity-0"} transition-opacity duration-300`} 
                        d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                    <path 
                        className={`${isDarkMode ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                        d="M9.7 17l4.6 0" />

                    <path 
                        className={`${isDarkMode ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
                        d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                    <path
                        className={`${isDarkMode ? "opacity-0" : "opacity-100"} transition-opacity duration-300`} 
                        d="M11.089 7.083a5 5 0 0 1 5.826 5.84m-1.378 2.611a5.012 5.012 0 0 1 -.537 .466a3.5 3.5 0 0 0 -1 3a2 2 0 1 1 -4 0a3.5 3.5 0 0 0 -1 -3a5 5 0 0 1 -.528 -7.544" />
                    <path
                        className={`${isDarkMode ? "opacity-0" : "opacity-100"} transition-opacity duration-300`} 
                        d="M9.7 17h4.6" />
                    <path
                        className={`${isDarkMode ? "opacity-0" : "opacity-100"} transition-opacity duration-300`} 
                        d="M3 3l18 18" />
                </svg>
            </button>
            {isDarkMode && <StarrySky isDarkMode={isDarkMode}/>}
            
        </>
    )
}

export default ThemeToggleButton;