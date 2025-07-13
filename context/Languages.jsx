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
            cz: "Czech Level: Getting started",
        },
        projects: {
            title: "Projects",
            twitter: {
                title: "Twitter copy",
                description: "A modern copy of Twitter's userface using NextJS, TailwindCSS, React and custom hooks where you can tweet, repy, like and retweet.",
            },
            claqueta: {
                title: "Claqueta Mágica",
                description: "Web App using the OMDb API to implement a functional store, wishlist and movie search with React, NextJS, TailwindCSS and more.",
            },
            salon: {
                title: "App Salon",
                description: "App for a beauty salon where you can request a quote or enter as an administrator to manage it using Sass, JavaScript, PHP and SQL.",
            },
            migracion: {
                title: "Bank Migration",
                description: "COBOL app for a bank migration using COBOL's mainframe, DB2 and JCL. EOI Capstone Project.",
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
            cz: "Checo Nivel: Iniciándome",
        },
        projects: {
            title: "Proyectos",
            twitter: {
                title: "Copia de Twitter",
                description: "Una copia moderna de la interfaz de Twitter usando NextJS, TailwindCSS, React y custom hooks donde puedes tweetear, responder, dar me gusta y retweetear.",
            },
            claqueta: {
                title: "Claqueta Mágica",
                description: "Página de películas utilizando la API OMDb implementando una tienda funcional, lista de deseos y buscador de películas con React, NextJS, TailwindCSS y más.",
            },
            salon: {
                title: "App Salón",
                description: "Aplicación para la gestión de un salón de belleza en la que se puede pedir cita o entrar como aministrador para gestionarlo usando Sass, JavaScript, PHP y SQL.",
            },
            migracion: {
                title: "Migración Bancaria",
                description: "Aplicación COBOL para una migración bancaria utilizando el mainframe de COBOL, DB2 y JCL. Proyecto final del curso de la EOI.",
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