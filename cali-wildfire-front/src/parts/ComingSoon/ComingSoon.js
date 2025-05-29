import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
    return (
        <div className="coming-soon-container">
            <h1 className="title-soon-container">
                Coming Soon...
            </h1>
            <p>
                This feature is under construction! Stay tuned!
            </p>

            <img src="comingsoonbear.gif" alt="Loading..." />


            <section id="feats-to-come-container" className="feats-to-come-container">
                <h2>Things to Come</h2>
                <h3>Home Page</h3>
                <ul>
                    <li>Map Legend and Icons</li>
                    <li>Live Statistical Graphs of Data</li>
                    <li>Data Cleaning and Summary/Linking of Incident Reports</li>
                </ul>
                <h3>Timeline Page</h3>
                <ul>
                    <li>View archived data from past fire incident reports across California</li>
                    <li>Access incident reports including:
                        <ul>
                            <li>Locations of incidents via Map graphics</li>
                            <li>Extent of area damaged</li>
                            <li>Economic impact data</li>
                            <li>Visualizations of data points</li>
                        </ul>
                    </li>
                </ul>
            </section>

        </div>

    );
};

export default ComingSoon;