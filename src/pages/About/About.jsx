import headshot from "../../images/headshot.png"
import "./About.css"

export default function About() {
    return (
        <div className="pageContainer">
            <div className="pageTitle">
                About Me
            </div>
            <div className="pageComponent">
                <div className="componentText">
                I am a full stack software engineer with an eye for detail and passion for creative problem solving. My background in account management and hospitality developed my skills as an excellent communicator, project manager, and practiced team player. As a result, I excel at project-based work where quiet, thoughtful deliberation is followed by collaboration.
                </div>
                <div className="componentSources">
                    <a href="">View Resume</a>
                </div>
                <div cassName="componentImage">
                    <img src={headshot} alt="headshot" id="headshot"></img>
                </div>
            </div>
        </div>
    )
}