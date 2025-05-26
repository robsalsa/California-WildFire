import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Papa from "papaparse";
import PopUP from "../PopUp/PopUP";


const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 34.009242,
    lng: -118.497604
};

function MapContainer() {
    const [ubicacion, setUbicacion] = useState([]);
    const [select, setSelect] = useState(null);

    const mapref = useRef(null);
    const popupContentRef = useRef(null);

    useEffect(() => {
        fetch("/mapdataall.csv")
            .then((response) => response.text())
            .then((csvText) => {
                const parsed = Papa.parse(csvText, { header: true });
                setUbicacion(parsed.data);
            });
    }, []);

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={10}
                onLoad={(map) =>{
                    mapref.current=map;
                }}

            >
                {ubicacion.map((location, index) => {
                    const lat = parseFloat(location.incident_latitude);
                    const lng = parseFloat(location.incident_longitude);
                    if (isNaN(lat) || isNaN(lng)) return null;

                    return (
                        <Marker
                            key={index}
                            position={{ lat, lng }}
                            title={location.incident_name}
                            // info={location.incident_url}
                            onClick={() =>
                                setSelect({
                                    lat,
                                    lng,
                                    location,
                                })
                            }
                        />
                    )
                })}
                {select && (
                    <div ref={popupContentRef}>
                        <div>
                            {/* <button onClick={() => setSelect(null)} className="popup-close-button">close</button> */}
                            <h3>Incident Name/Type: {select.location.incident_name}</h3>
                            <p>ID: {select.location.incident_id}</p>
                            <a href={select.location.incident_url} target="_blank" rel="noopener noreferrer">
                                Learn More
                            </a>
                        </div>
                    </div>
                )}

                {select && popupContentRef.current && (
                    <PopUP
                        map={mapref.current}
                        position={new window.google.maps.LatLng(select.lat, select.lng)}
                        content={popupContentRef.current}
                    />
                )}
            </GoogleMap>
        </LoadScript>
    );
}

export default MapContainer;