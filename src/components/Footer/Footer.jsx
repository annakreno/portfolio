import "./Footer.css"
import { Link } from 'react-scroll';
<div className="navLinks">
    
</div>

export default function Footer() {
    return (
        <div className="footerContainer">
            <Link to="home" smooth={true}>Back to Top</Link>
            <div className="linkContainer">Designed & Built by Anna Reno</div>
        </div>
    )
}

