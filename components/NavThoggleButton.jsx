import { useState } from "react";

const NavThoggleButton = ({ isOpen, setIsOpen }) => {

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex items-center justify-center ">
            <button
                className="flex items-center justify-center transition-all"
                onClick={toggleNav}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transformOrigin: "center",
                    }}
                >
                    {/* Hamburguesa */}
                    <path
                        className={`${isOpen ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    {/* Cruz */}
                    <path
                        className={`${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19v-2a2 2 0 0 1 2 -2h2" />
                    <path
                        className={`${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 5v2a2 2 0 0 0 2 2h2" />
                    <path
                        className={`${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 15h2a2 2 0 0 1 2 2v2" />
                    <path
                        className={`${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 9h2a2 2 0 0 0 2 -2v-2" />
                </svg>
            </button>
        </div>
    );
};

export default NavThoggleButton;

