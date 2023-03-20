import "./Footer.css"
import { Link } from 'react-scroll';
<div className="navLinks">
    
</div>

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="linkContainer"><Link to="home" smooth={true}>Back to Top</Link></div>
            <div>Designed & Built by Anna Reno</div>
            <div className="linkContainer">Photo by <a href="https://unsplash.com/@evieshaffer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Evie S.</a> on <a href="https://unsplash.com/photos/h_Aike2KQOw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        </div>
    )
}

