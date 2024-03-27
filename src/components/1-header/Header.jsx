import { useState, useEffect } from 'react';
import './Header.css';

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("currantMode");
    return savedTheme || "dark"; // default to dark theme if not set
};

const Header = () => {
    const [showModel, setShowModel] = useState(false);
    const [theme, setTheme] = useState(getInitialTheme());

    useEffect(() => {
        document.body.classList.remove("dark", "light");
        document.body.classList.add(theme);
        localStorage.setItem("currantMode", theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };


    return (
        <header className='flex'>
            <button className='icon-menu menu flex' onClick={() => setShowModel(true)} />
            <div />
            <nav>
                <ul className='flex'>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact-us-id">Contact</a></li>
                </ul>
            </nav>
            <button onClick={toggleTheme} className='mode flex'>
                {theme === "dark" ? (
                    <span className='icon-sun'></span>
                ) : (
                    <span className='icon-moon-o'></span>
                )}
            </button>
            {
                showModel && (
                    <div className='fixed'>
                        <ul className='model'>
                            <li><button className='icon-close' onClick={() => setShowModel(false)} /></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                )
            }

        </header >
    );
};

export default Header;