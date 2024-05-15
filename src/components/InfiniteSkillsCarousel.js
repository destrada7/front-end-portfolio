import React, { useEffect, useRef } from "react";
import '../styles/InfiniteSkillsCarousel.css';

const InfiniteSkillsCarousel = () => {
    const skillsContainerRef = useRef(null);
    const skillsSliderRef = useRef(null);

    useEffect(() => {
        const skillsSlider = skillsSliderRef.current;
        if (skillsSlider) {
            const copy = skillsSlider.cloneNode(true);
            skillsSlider.appendChild(copy);
        }
    }, []);

    return (
        <div className="skills_container" ref={skillsContainerRef}>
            <div className="skills_slider" ref={skillsSliderRef}>
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
