import "./Contact.css"
import { useState } from "react";

export default function Contact() {
    const [activeClass, setActiveClass] = useState("inactive")

    function handleClick() {
        activeClass === "active" ? setActiveClass("inactive") : setActiveClass("active")
    }

    return (
        <div className="pageContainer" id="contactPageContainer">
            <div className="pageTitle">Contact</div>
            
            <div className="pageComponent" id="contactPageText">
                Interested in working with me? I am available for freelance work or full-time hire. I would love to hear more about your companies or current projects you are working on. Please feel free to contact me.
            </div>
            
            <div className={activeClass} onClick={handleClick} >
                
                { activeClass === "active" ?
                    <>
                        <div className="contactInfo">E: annakreno@gmail.com</div>
                        <br/>
                        <div className="contactInfo">P: (765) 631-1777</div>
                        <br/>
                        <div className="linkContainer"><a href="https://www.linkedin.com/in/annareno/">LinkedIn</a></div>
                    </>
                    : "Show Contact Info"
                }
            </div>

            

        </div>
    )

}