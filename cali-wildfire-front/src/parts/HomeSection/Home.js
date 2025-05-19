import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


export const Home = () => {
    return (
        <div>
            <section id="notification-bar" classname="notification-bar">
                <h1>Cali-Wildfire Watch</h1>
                <nav>
                    <button id="placeholder">Placeholder1</button>
                    <button id="placeholder2">Placeholder2</button>
                </nav>
            </section>
            <section id="box-container" classname="box-container">
                <div classname="main-content">
                    <section id="fire-map-view" classname="view-box">
                        <h2>Local Fire & Other News</h2>
                        <div id="map-container">
                            <div id="actual-map"></div>
                        </div>
                    </section>
                </div>
            </section>

            <aside id="sidebar" classname="sidebar">
                <section id="recent-fires">
                    <h2> Recent/Current Fires</h2>
                    <p> news news news news news news news so good news news news </p>
                </section>
            </aside>
        </div>
    );
};