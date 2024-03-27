
// Footer.js
import './Footer.css';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log("sdvcsdv");
    };
    const [showScrollBotton, setshowScrollBotton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setshowScrollBotton(true)
            } else {
                setshowScrollBotton(false)
            }
        })
    }, [])

    useEffect(() => {
        const arrowUpButton = document.querySelector('.icon-arrow-up');
        if (arrowUpButton) {
            arrowUpButton.addEventListener('click', scrollToTop);
        }

        return () => {
            if (arrowUpButton) {
                arrowUpButton.removeEventListener('click', scrollToTop);
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once after the component mounts

    return (
        <footer className='flex'>
            <ul className='flex'>
                <li><a href="">About</a></li>
                <li><a href="">Articles</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <p className='copyright'>CopyRight Emad Magdy .</p>
            <a href="#header" style={{ opacity: showScrollBotton ? 1 : 0, transition: 'opacity 0.5s' }}>
                <button className="icon-arrow-up" onClick={scrollToTop}></button>
            </a>
        </footer>
    );
}