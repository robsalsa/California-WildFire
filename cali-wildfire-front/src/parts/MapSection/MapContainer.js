import React, { useState, useEffect } from "react";
import {GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Papa from "papaparse";

const containerStyle ={
    width:'100%',
    height: '500px'
};

const center ={
    lat:34.009242,
    lng:-118.497604
};

function MapContainer(){
    const [ubicacion, setUbicacion] =useState([]);

    useEffect(() => {
        fetch("/mapdataall.csv")
        .then((response) => response.text())
        .then((csvText) => {
            const parsed=Papa.parse(csvText, {header: true});
            setUbicacion(parsed.data);
        });
    }, []);

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                {ubicacion.map((location, index) =>{
                    const lat = parseFloat(location.incident_latitude);
                    const lng = parseFloat(location.incident_longitude);
                    if(isNaN(lat) || isNaN(lng)) return null;

                    return(
                        <Marker
                            key={index}
                            position={{lat,lng}}
                            title={location.incident_name}
                            // info={location.incident_url}
                        />
                    )
                })}
            </GoogleMap>
        </LoadScript>
    );
}

export default MapContainer;





// import React from "react";
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// // request('dotenv').config();  i guess i can go screw myself huh

// const containerStyle ={
//     width: '100%',
//     height: '500px'
// };

// // this might not be needed... I think 

// const center ={
//     lat: 34.009242,
//     lng: -118.497604

// }

// function MapContainer() {
//     return (
//         <LoadScript googleMapApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={10}
//             >
//                 {/* Extra shit goes here: Pins, Labels, Pop-ups */}
//             </GoogleMap>
//         </LoadScript>
//     );
// }

// export default MapContainer;







