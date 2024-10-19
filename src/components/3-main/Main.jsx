import './Main.css'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

export default function Main() {
    const myProjects = [
        { projectTitle: 'Talabat Clone', projectSubTitle: 'Laravel with blade', category: 'laravel', link: 'https://talabat-clone-production.up.railway.app/', imagePath: 'laravel.png' },
        { projectTitle: 'Money Transaction', projectSubTitle: 'Laravel with blade', category: 'laravel', link: 'https://github.com/EmadMagdy10/Transaction', imagePath: 'laravel.png' },
        { projectTitle: 'Management System', projectSubTitle: 'Laravel API With JWT', category: 'laravel', link: 'https://github.com/EmadMagdy10/Management-System', imagePath: 'jwt.png' },
        { projectTitle: 'PHP project', projectSubTitle: 'E-commerce', category: 'php', link: 'https://github.com/EmadMagdy10/e-commerce-', imagePath: 'php.png' },
        { projectTitle: 'HTML & CSS project', projectSubTitle: 'Template', category: 'html', link: 'https://github.com/EmadMagdy10/Template-2', imagePath: 'html.jpg' },
        { projectTitle: 'To-Do App', projectSubTitle: 'Flutter With Dart', category: 'flutter', link: 'https://github.com/EmadMagdy10/Todo-app', imagePath: 'flutter.png' },
    ];

    const [currentActive, setCurrentActive] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState(myProjects);

    const handleClick = (category) => {
        if (category === 'all') {
            setCurrentActive('all');
            setFilteredProjects(myProjects);
        } else {
            const newFilteredProjects = myProjects.filter((item) => item.category === category);
            setCurrentActive(category);
            setFilteredProjects(newFilteredProjects);
        }
    };

    return (
        <main className="flex" id='projects'>
            <section className="left-section flex">
                <button onClick={() => handleClick('all')} className={currentActive === 'all' ? 'active' : null} data-testid="all-button">
                    All Project
                </button>
                <button onClick={() => handleClick('html')} className={currentActive === 'html' ? 'active' : null} data-testid="html-button">
                    HTML & CSS
                </button>
                <button onClick={() => handleClick('php')} className={currentActive === 'php' ? 'active' : null} data-testid="php-button">
                    PHP
                </button>
                <button onClick={() => handleClick('laravel')} className={currentActive === 'laravel' ? 'active' : null} data-testid="laravel-button">
                    Laravel
                </button>
                <button onClick={() => handleClick('flutter')} className={currentActive === 'flutter' ? 'active' : null} data-testid="flutter-button">
                    Flutter
                </button>
            </section>
            <section className="right-section flex">
                <AnimatePresence>
                    {filteredProjects.map((item, index) => (

                        <motion.article
                            layout
                            initial={{ transform: 'scale(0.4)' }}
                            animate={{ transform: 'scale(1)' }}
                            transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                            key={index}
                            className="card"
                            data-testid="project-card"
                        >
                            <a target="_blank" href={item.link}>
                                <img src={item.imagePath} alt="" />
                                <div className="box">
                                    <h1 className="title">{item.projectTitle}</h1>
                                    <p className="subtitle">{item.projectSubTitle}</p>
                                    <div className="flex icons">
                                        <div className="icon-github"></div>
                                        <div className="flex">
                                            <a href="#">More</a>
                                            <div className="icon-arrow-right"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </section>
        </main>
    );
}
