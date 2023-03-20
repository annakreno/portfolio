import headshot from "../../images/headshot.png"
import "./About.css"

export default function About() {
    return (
        <div className="pageContainer">
            <div className="pageTitle">
                About Me
            </div>
            <div className="pageComponent" id="aboutPageComponent">
                <div className="componentText">
                    <div id="bio">
                    I am a full stack software engineer with an eye for detail and passion for creative problem solving. My background in account management and hospitality developed my skills as an excellent communicator, project manager, and practiced team player. As a result, I excel at project-based work where quiet, thoughtful deliberation is followed by collaboration.
                    </div>
                    <div id="aboutMeLinks">
                        <div className="linkContainer"><a href="https://drive.google.com/file/d/1HmHzJIQqfCU9wikXyAs0GYO5ueawtJ5Z/view?usp=sharing">Resume</a></div>
                        &nbsp; | &nbsp;
                        <div className="linkContainer"><a href="https://www.linkedin.com/in/annareno/">LinkedIn</a></div>
                        &nbsp; | &nbsp;
                        <div className="linkContainer"><a href="https://github.com/annakreno">GitHub</a></div>
                    </div>
                </div>
                
                <div cassName="componentImage">
                    <img src={headshot} alt="headshot" id="headshot"></img>
                </div>
            </div>
            
        </div>
    )
}