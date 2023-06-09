import "./NavBar.css"
import { Link } from 'react-scroll';

export default function NavBar() {
    return (
        <div className="navContainer">
                <div className="logo"> AR</div>
                <div className="navLinks">
                    <Link to="home" smooth={true}>Home</Link>
                </div>
                <div className="navLinks">
                    <Link to="work" smooth={true}>Work</Link>
                </div>
                <div className="navLinks">
                    <Link to="about" smooth={true}>About</Link>
                </div>
                <div className="navLinks">
                    <Link to="contact" smooth={true}>Contact</Link>
                </div>
                <div className="navLinks">
                    <a href="https://drive.google.com/file/d/1Gnsz3Z9lqAtgjmhS0CHpjlJ8LBPF0C9D/view?usp=sharing" target="_blank">Resume</a>
                </div>
        </div>
    )
    
}
