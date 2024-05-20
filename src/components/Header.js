import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
    const [isSpanish, setIsSpanish] = useState(false);

    const toggleLanguage = () => {
        setIsSpanish(!isSpanish);
    };

    return (
        <header>
            <div className="header-button-container">
                {isSpanish ? (
                    <button id="en-button" onClick={toggleLanguage}>EN</button>
                ) : (
                    <button id="es-button" onClick={toggleLanguage}>ES</button>
                )}
            </div>
        </header>
    );
}

export default Header;