import React, { useEffect, useRef} from "react";
import '../styles/InfiniteSkillsCarousel.css';

const InfiniteSkillsCarrousel = () => {
    const skillsContainerRef = useRef(null);
    const skillsSliderRef = useRef(null);

    useEffect(() => {
        if (skillsContainerRef.current && skillsSliderRef.current) {
            const copy = skillsSliderRef.current.cloneNode(true);
            skillsContainerRef.current.appendChild(copy);
        }
    }, []);

    return(
        <div className="skills_container" ref={skillsContainerRef}>
            <div className="skills_slider" ref={skillsSliderRef}>
                <div className="skill" id="JavaScript">JavaScript</div>
                <div className="skill" id="React">React</div>
                <div className="skill" id="HTML">HTML</div>
                <div className="skill" id="CSS">CSS</div>
                <div className="skill" id="Responsive Design">Responsive Desgin</div>
                <div className="skill" id="Figma">Figma</div>
                <div className="skill" id="Git">Git</div>
                <div className="skill" id="GitHub">GitHub</div>
            </div>
        </div>
    );
};

export default InfiniteSkillsCarrousel;