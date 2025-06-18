import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const getInitialTheme = () => {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const storedDarkMode = localStorage.getItem("darkTheme");

        if (storedDarkMode === null) {
                return prefersDarkMode;
        }

        return storedDarkMode === "true";
};

export const AppProvider = ({ children }) => {
        const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme());
        const [searchTerm, setSearchTerm] = useState("Cat");

        const toggleDarkTheme = () => {
                const newDarkTheme = !isDarkTheme;
                setIsDarkTheme(newDarkTheme);
                localStorage.setItem("isDarkTheme", newDarkTheme);
        };

        useEffect(() => {
                const body = document.body;
                body.classList.toggle("dark-theme", isDarkTheme);
        }, [isDarkTheme]);

        return (
                <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}>
                        {children}
                </AppContext.Provider>
        );
};

export const useGlobalContext = () => {
        const context = useContext(AppContext);
        if (context === undefined) {
                throw new Error("useGlobalContext must be used within a AppProvider");
        }
        return context;
};
