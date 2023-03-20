import "./Work.css";
import cosmicCompanion from "../../images/cosmic_companion.png";
import itineraryBuilder from "../../images/itinerary_builder.png";
import slotMachine from "../../images/slot_machine.png";
import togetherNow from "../../images/together_now.png";

export default function Work() {
    return (
        <div className="pageContainer" id="workPageContainer">

            <div className="pageTitle">
                Featured Work
            </div>

            <div className="pageComponent" id="pageComponent1">
                <div className="componentText">
                    <div className="projectName">Slot Machine</div>
                    <div className="technologiesUsed">JavaScript, HTML, CSS</div>
                    <div className="projectDescription">A browser based slot machine game. Click the lever to spin the slots. Each win adds $100 to your total winnings.</div>
                    <div className="componentSources">
                        <div className="linkContainer"><a href="https://github.com/annakreno/slotmachinegame">Github Repo</a></div>
                        &nbsp; | &nbsp;
                        <div className="linkContainer"><a href="https://annakreno.github.io/slotmachinegame/">Game</a></div>
                    </div>
                </div>
                <div className="componentImage">
                    <img src={slotMachine} alt="Slot Machine Game Mockup"></img>
                </div>
            </div>

            <div className="pageComponent">
                <div className="componentImage">
                    <img src={itineraryBuilder} alt="Itinerary Builder App Mockup"></img>
                </div>
                <div className="componentText">
                    <div className="projectName">Itinerary Builder</div>
                    <div className="technologiesUsed">JavaScript, Node.js, Express & MongoDB</div>
                    <div className="projectDescription">A full-stack web application with OAuth where users can build and organize their next visit.</div>
                    <div className="componentSources">
                        <div className="linkContainer"><a href="https://github.com/annakreno/itinerary-builder">Github Repo</a></div>
                        &nbsp; | &nbsp;
                        <div className="linkContainer"><a href="https://itinerary-builder.herokuapp.com/">App</a></div>
                    </div>
                </div>
            </div>

            <div className="pageComponent">
                <div className="componentText">
                    <div className="projectName">Cosmic Companion </div>
                    <div className="technologiesUsed">Python3, Django, PostgreSQL, AWS, NASA's Astronomy Picture of the Day API</div>
                    <div className="projectDescription">A full stack web application for tracking celestial events. Users can view upcoming celestial events and filtered by date range or log in to create, edit, and delete events or upload images.</div>
                    <div className="componentSources">
                        <div className="linkContainer"><a href="https://github.com/annakreno/cosmiccompanion">Github Repo</a></div>
                        &nbsp; | &nbsp;
                        <div className="linkContainer"><a href="https://cosmiccompanion.herokuapp.com/">App</a></div>
                    </div>
                </div>
                <div className="componentImage">
                    <img src={cosmicCompanion} alt="Cosmic Companion App Mockup"></img>
                </div>
            </div>

            <div className="pageComponent">
                <div className="componentImage">
                    <img src={togetherNow} alt="Together Now App Mockup"></img>
                </div>
                <div className="componentText">
                    <div className="projectName">Together Now</div>
                    <div className="technologiesUsed">JavaScript, Node.js/Express, React & MongoDB, token-based authentication</div>
                    <div className="projectDescription">A React app to help users manage social relationships & keep track of commitments.</div>
                    <div className="componentSources">
                        <div className="linkContainer"><a href="https://github.com/annakreno/together-now">Github Repo</a></div>
                        &nbsp; | &nbsp;
                        <div className="linkContainer"><a href="https://together-now-app.herokuapp.com/">App</a></div>
                    </div>
                </div>
            </div>

        </div>
    )
}