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
                        <h2> Active Fire Incident Reports</h2>
                        <h3>Updates: </h3>
                        <ul>
                            <li> <a href="/ComingSoon">*!* Features Coming Soon *!* </a></li>
                            
                        </ul>
                        <h3> Currently You Are Viewing: </h3>
                        <ul>
                            <li> Fire Incident Reports Year(s): 2025-2003 </li>
                            <li> Fire Incident Reports Provided by: The California Department of Forestry and Fire Protection (CAL FIRE) <a href="https://www.fire.ca.gov/about">Learn More</a> </li>
                            

                        </ul>
                    </section>
                    <section id="legend-container">
                        <h2> Map Legend</h2>
                        <ul>
                            <li>Pins: Location of Fire Incidents        (Click Pins to learn more!)</li>
                            <li> <a href="/ComingSoon">*!* Features Coming Soon *!* </a></li>
                        </ul>
                    </section>
                    <section id="data-container">
                        <h1>Incident Data Across the Year(s) </h1>
                                        <img src="Maia's Thing.png" alt="Loading..." style={{ height: "75%", width: "100%" }} />

                    </section>
                </aside>
                
            </main>
             {/* <div className="under-home-container">
                <img src="Maia's Thing.png" alt="Loading..." style={{ height: "75%", width: "700px" }} />

            </div> */}

        </div>
    );
};