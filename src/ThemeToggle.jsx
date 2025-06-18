import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

export default function ThemeToggle() {
        const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
        return (
                <section className="toggle-container">
                        <button onClick={toggleDarkTheme} className="dark-toggle">
                                {isDarkTheme ? (
                                        <BsFillMoonFill className="toggle-icon" />
                                ) : (
                                        <BsFillSunFill className="toggle-icon" />
                                )}
                        </button>
                </section>
        );
}
