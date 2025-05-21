import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
//these are nessary imports for a simple page. Just have those three things and youll be fine
//make sure the "./(Name of CSS file)" is correct or else the page will refuse to work

export const Home = () => {
    return (
        <div className="home-container">
            <section id="notification-bar" className="notification-bar">
                <h1>Cali-Wildfire Watch</h1>
                {/* <nav>
                    <button id="placeholder">Placeholder1</button>
                    <button id="placeholder2">Placeholder2</button>
                </nav> */}
            </section>
{/* Section ID: Notification-Bar ClassName: Notification-Bar 
	this is just the title name. I was thinking to use both the burger 
    stack and some links but mine broke soooo yeah.  */}


            <main className="content-wrapper">
                <section id="box-container" className="box-container">
                    <h2>Local Fire & Other News</h2>
                    <div className="main-content">
                        <section id="fire-map-view" className="view-box">
                            {/* <h2>Local Fire & Other News</h2> */}
                            {/* <div id="map-container"> */}
                            <div id="actual-map">Map Here!1!</div>
                            {/* PUT THE MAP HERE PLEASE AHHHHHHHHHHHHHHHH!! */}
                            {/* </div> */}
                        </section>
                    </div>
                </section>

                <aside id="sidebar" className="sidebar">
                    <section id="recent-fires">
                        <h2> Recent/Current Fires</h2>
                        <p> news news news news news news news so good news news news </p>
                    </section>
                </aside>
            </main>

{/* main ClassName: Content Wrapper 
	is the actual look of the page

	Section ID: Box Container ClassName: Box Container
		is the MAIN PAGE!!! This means that the actual page elements, components, and features are all going to end up here!
		
		NOTE: Either place your map API inside of Section ID: Fire-Map-View or inside of Div ID: Actual Map. 

	Aside ID: Sidebar 
		Is exactly as the name means its the actual side bar.  */}

        </div>
    );
};