import './Skill.css';

const skillsData = [
    { logo: "laravel-logo.png", name: "Laravel" },
    { logo: "php-logo.png", name: "PHP" },
    { logo: "mysql-logo.png", name: "MySQL" },
    { logo: "react-logo.png", name: "React" },
    { logo: "html-logo.png", name: "HTML" },
    { logo: "css-logo.png", name: "CSS" },
    { logo: "JavaScript_logo.png", name: "JavaScript" },
    { logo: "Tailwind-logo.png", name: "Tailwind" },
    { logo: "git-logo.png", name: "GitHub" }
];

const Skill = () => {
    return (
        <section className='skills' id='skills'>
            <h1 className='title'>
                <span className='icon-lightbulb'></span>My Skills
            </h1>
            <div className='flex scroll'>
                {skillsData.map((skill, index) => (
                    <div key={index} className='skill border-skill'>
                        <img src={skill.logo} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skill;