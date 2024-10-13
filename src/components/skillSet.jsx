import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

function SkillSet() {
    const mainSkills = [
        { lang: 'HTML5', ability: 50 },
        { lang: 'CSS3', ability: 30 },
        { lang: 'JavaScript', ability: 70 },
        { lang: 'jQuery', ability: 50 },
        { lang: 'Vue.js',  ability: 70 },
        { lang: 'React',  ability: 30 },
        { lang: 'TypeScript',  ability: 30 },
        { lang: 'SCSS', ability: 30 },
        { lang: 'MySQL', ability: 40 },
        { lang: 'Github', ability: 50 },
        { lang: 'SVN', ability: 70 },
    ];

    return (
        <section id="skillSet">
            <h2>Main Skills</h2>
            <ul>
                {
                    mainSkills.map((el) => {
                        return (
                            <li key={`${el.lang}`} style={{display: 'flex', alignItems: 'center', margin: '0 auto'}}>
                                <div className="skill-name">{el.lang}</div>
                                <div className="ability-bar">
                                    <ProgressBar 
                                        completed={el.ability} 
                                        borderRadius="5px" 
                                        bgColor="#4a84c2"
                                        />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
export default SkillSet;