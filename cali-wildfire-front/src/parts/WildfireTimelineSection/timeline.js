import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './Timeline.css';

export const Timeline = () => {
    const [selectedYear, setSelectedYear] = React.useState(50);

    const [hello2, setHello] = useState("");
    useEffect(() => {
        fetch("http://localhost:5000/mem")
        .then((res) => res.json())
        .then((data) => {
            if(data.mem){
                setHello(data.mem.join(" "));
            }
        })
        .catch((err) => console.error("ERROR Fetch error: "));
    }, []);


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
            <section id="help" className="help">
                <h2>testing a hello from the backend</h2>
                <h3>{hello2 || "this shit aint loadin'"}</h3>
            </section>

        </div>
        
    );
};