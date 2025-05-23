import React from "react";
import { Link } from "react-router-dom";
import MapContainer from '../MapSection/MapContainer';
// API is needed for this to work
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
                           <div id= "actual-map" style={{height: "100%", width: "900px"}}>
                                {/* Map size is kinda stuck here because im scared to move it into the CSS */}
                                <MapContainer />
                                {/* <MapContainer /> */}
                            
                           </div>
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

            <div className="under-home-container">
                <h1>maybe graphs can go here either as a baked-in thing or a component like the Map container</h1>
            </div>


        </div>
    );
};