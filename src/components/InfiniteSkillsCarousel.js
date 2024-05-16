import React, { useEffect, useRef } from "react";
import '../styles/InfiniteSkillsCarousel.css';

const InfiniteSkillsCarousel = () => {

    return (
        <div className="skills_container">
            <div className="skills_slider">
                <div className="skill">JavaScript</div>
                <div className="skill">React</div>
                <div className="skill">HTML</div>
                <div className="skill">CSS</div>
                <div className="skill">Responsive Design</div>
                <div className="skill">Figma</div>
                <div className="skill">Git</div>
                <div className="skill">GitHub</div>
            </div>
            <div className="skills_slider">
                <div className="skill">JavaScript</div>
                <div className="skill">React</div>
                <div className="skill">HTML</div>
                <div className="skill">CSS</div>
                <div className="skill">Responsive Design</div>
                <div className="skill">Figma</div>
                <div className="skill">Git</div>
                <div className="skill">GitHub</div>
            </div>
        </div>
    );
};

export default InfiniteSkillsCarousel;



/* import React from "react";
import '../styles/InfiniteSkillsCarousel.css';

const InfiniteSkillsCarousel = () => {
const copy = document.querySelector(.skills_slider).cloneNode(true);
document.querySelector('.skills_container').appendChild(copy);
    return (
        <div className="skills_container">
            <div className="skills_slider">
                <div className="skill">JavaScript</div>
                <div className="skill">React</div>
                <div className="skill">HTML</div>
                <div className="skill">CSS</div>
                <div className="skill">Responsive Design</div>
                <div className="skill">Figma</div>
                <div className="skill">Git</div>
                <div className="skill">GitHub</div>
            </div>
        </div>
    );
};

export default InfiniteSkillsCarousel;
*/
