import React from 'react';
import { Link } from "react-router-dom";
import './Timeline.css';

export const Timeline = () => {
    const [selectedYear, setSelectedYear] = React.useState(50);

    const handleSliderChange = (e) => {
        setSelectedYear(e.target.value);
    };

    return (
        <div className="timeline-container">
            <section id="slider-slide" className="slider-slide">
                <h1>Wildfire Timeline</h1>
                <label HTMLfor="yearSlider" id="sliderLabel">PlaceHolder Text</label>
                <br />
                <input type="range" id="yearSlider" min="0" max="100" value="50" className="slider"></input>
                <p>Selected Year: <span id="selectedYearDisplay">{selectedYear}</span></p>
            </section>
        </div>
    );
};