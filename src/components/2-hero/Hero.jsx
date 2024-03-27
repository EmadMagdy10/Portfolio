import './Hero.css'
import Lottie from 'lottie-react'
import { useRef } from "react";
import { motion } from "framer-motion";
import devAnimation from '../../animation/dev.json'
export default function Hero() {
    const lottieRef = useRef();

    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        window.open('https://acrobat.adobe.com/id/urn:aaid:sc:EU:b93e2468-46da-48fe-8729-70bae5f57ed7', '_blank');
        downloadLink.download = 'Your_CV_File.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    return (
        <section className='hero flex'>
            <div className='left '>
                <div className="parent-avatar flex">
                    <motion.img
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1.1)" }}
                        transition={{ damping: 6, type: "spring", stiffness: 100 }}
                        className='avatar' src="./file.jpg" alt="" />
                    <div className='icon-verified'></div>
                </div>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className='title'>I&apos;m a Back-End Developer</motion.h1>
                <p className='subtitle'>Recent computer science graduate with a strong back-end foundation seeking a junior software developer role. Passionate about software development, eager to contribute to high-quality solutions, and grow in a collaborative team.
                    Committed to learning and delivering value to the organization.</p>

                <div className="all-icons flex">
                    <a href="https://www.linkedin.com/in/3mad-magdy/" target="_blank" rel="noopener noreferrer" className="icon icon-linkedin"></a>
                    <a href="https://www.instagram.com/3madmagdy?igsh=MWo0NmFyMXJ5cDc0MA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="icon icon-instagram"></a>
                    <a href="https://github.com/EmadMagdy10" target="_blank" rel="noopener noreferrer" className="icon icon-github"></a>
                    <div>
                    </div>
                    <div className='skill border-skill'>
                        <button className='cv' onClick={handleDownload}>Download CV</button>

                    </div>
                </div>

            </div>
            <div className='right animation'>

                <Lottie
                    style={{ height: 400, width: 600 }}
                    lottieRef={lottieRef}
                    className=""
                    onLoadedImages={() => {
                        lottieRef.current.setSpeed(0.5);
                    }}
                    animationData={devAnimation}
                />
            </div>
        </section>
    )
}
