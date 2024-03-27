
import './Skill.css';

export default function Skill() {
    return (
        <section className='skills' id='skills'>
            <h1 className='title'>
                <span className='icon-lightbulb'></span>My Skills
            </h1>
            <div className='flex'>
                <div className='skill border-skill'>
                    <img src="html-logo.png" alt="" />
                    <p>HTML</p>
                </div>
                <div className='skill border-skill'>
                    <img src="laravel-logo.png" alt="" />
                    <p>Laravel</p>
                </div>
                <div className='skill border-skill'>
                    <img src="php-logo.png" alt="" />
                    <p>PHP</p>
                </div>
                <div className='skill border-skill'>
                    <img src="css-logo.png" alt="" />
                    <p>CSS</p>
                </div>
                <div className='skill border-skill'>
                    <img src="JavaScript_logo.png" alt="" />
                    <p>JavaScript</p>
                </div>
                <div className='skill border-skill'>
                    <img src="react-logo.png" alt="" />
                    <p>React</p>
                </div>
                <div className='skill border-skill'>
                    <img src="mysql-logo.png" alt="" />
                    <p>MySQL</p>
                </div>
                <div className='skill border-skill'>
                    <img src="Tailwind-logo.png" alt="" />
                    <p>Tailwind</p>
                </div>
                <div className='skill border-skill'>
                    <img src="git-logo.png" alt="" />
                    <p>GitHub</p>
                </div>
            </div>
        </section>
    )
}