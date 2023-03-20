import "./Footer.css"
import { Link } from 'react-scroll';
<div className="navLinks">
    
</div>

export default function Footer() {
    return (
        <div className="footerContainer">
            <Link to="home" smooth={true}>back to top</Link>
            <div className="linkContainer">designed & built by Anna Reno</div>
        </div>
    )
}

