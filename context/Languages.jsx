"use client"
import { createContext, useContext, useState, useEffect } from "react";


const languageData = {
    en: {
        nav: {
            description: "Junior Developer",
            about: "About me",
            capacities: "Capacities",
            projects: "Projects",
        },
        aboutMe: {
            intro: "Hi, my name is",
            title: "About Me",
            description: "Full Stack Developer with experience in creating engaging and functional user interfaces. Expert in key technologies like React.",
            cv: "Download my CV",
        },
        contact: {
            contact: "Contact",
            cv: "Download my CV",
        },
        capacities: {
            title: "Capacities",
            tecnologies: "Technologies",
            languages: "Languages",
            en: "English Level: C",
            es: "Spanish Level: Native",
            cz: "Czech Level: Iniciandome",
        },
        projects: {
            title: "Projects",
            twitter: {
                title: "Twitter copy",
                description: "A modern copy of Twitter's userface using NextJS. TailwindCSS and React where you can tweet, repy, like, retweet, and custom hooks.",
            },
            claqueta: {
                title: "Claqueta Mágica",
                description: "Web App using the OMDb API to implement a functional store, wishlist and movie search with React, NextJS, TailwindCSS and more.",
            },
            salon: {
                title: "App Salon",
                description: "App for a beauty salon where you can request a quote or enter as an administrator to manage it using Sass, JavaScript, PHP and SQL.",
            },
            bienes: {
                title: "App Bienes",
                description: "App for a root business where you can create new homes or view the ones that already exist using Sass, JavaScript, PHP and SQL.",
            },
            more: "See more"
        },
    },
    es: {
        nav: {
            description: "Desarrollador Junior",
            about: "Sobre mí",
            capacities: "Capacidades",
            projects: "Proyectos",
        },
        aboutMe: {
            intro: "Hola, me llamo",
            title: "Sobre mí",
            description: "Desarrollador Full Stack con experiencia en creación de interfaces de usuario atractivas y funcionales. Experto en tecnologías clave como React.",
            cv: "Descargar mi CV",
        },
        contact: {
            contact: "Contacto",
            cv: "Descargar mi CV",
        },
        capacities: {
            title: "Capacidades",
            tecnologies: "Tecnologías",
            languages: "Idiomas",
            en: "Inglés Nivel: C",
            es: "Español Nivel: Nativo",
            cz: "Checo Nivel: Getting started",
        },
        projects: {
            title: "Proyectos",
            twitter: {
                title: "Copia de Twitter",
                description: "Una copia moderna de la interfaz de Twitter usando NextJS. TailwindCSS y React donde puedes tweetear, responder, dar me gusta, retweetear y custom hooks.",
            },
            claqueta: {
                title: "Claqueta Mágica",
                description: "Página de películas ustilizando la API OMDb implementando una tienda funcional, lista de deseos y buscador de películas con React, NextJS, TailwindCSS y más.",
            },
            salon: {
                title: "App Salón",
                description: "Aplicación para la gestión de un salón de belleza en la que se puede pedir cita o entrar como aministrador para gestionarlo usando Sass, JavaScript, PHP y SQL.",
            },
            bienes: {
                title: "App Bienes",
                description: "Aplicación para un negocio de bienes raíces donde puedes crear nuevas viviendas o ver las que ya existen usando Sass, JavaScript, PHP y SQL.",
            },
            more: "Ver más"
        },
    },
};

const LanguagesContext = createContext();

export const LanguagesProvider = ({ children }) => {
    const [language, setLanguage] = useState("es");
    const [error, setError] = useState(null); 

    useEffect(() => {
        try {
            const storedLanguage = localStorage.getItem("language") || "es";
            setLanguage(storedLanguage);
        } catch (e) {
            setError("Error al cargar el idioma del almacenamiento local");
            console.error(e); 
        }
    }, []);

    const toggleLanguage = () => {
        try {
            const newLanguage = language === "es" ? "en" : "es";
            localStorage.setItem("language", newLanguage);
            if (newLanguage === "es") {
                document.documentElement.classList.add("en");
            } else {
                document.documentElement.classList.remove("en");
            }
            setLanguage(newLanguage);
        } catch (e) {
            setError("Error al cambiar el idioma");
            console.error(e); // Log de error si es necesario
        }
    };

    const selectedLanguageData = languageData[language];

    if (!selectedLanguageData) {
        setError("Idioma no disponible");
    }

    return (
        <LanguagesContext.Provider value={{ selectedLanguageData, language, toggleLanguage, error }}>
            {children}
        </LanguagesContext.Provider>
    );
};

export const useLanguages = () => useContext(LanguagesContext);