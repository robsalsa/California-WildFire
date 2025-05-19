import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


export const Home = () => {
    return (
        <div className="home-container">
            <section id="notification-bar" className="notification-bar">
                <h1>Cali-Wildfire Watch</h1>
                <nav>
                    <button id="placeholder">Placeholder1</button>
                    <button id="placeholder2">Placeholder2</button>
                </nav>
            </section>

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
        </div>
    );
};